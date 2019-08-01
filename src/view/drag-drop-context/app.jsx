// @flow
import React, { memo, useEffect, useRef, useState, type Node } from 'react';
import invariant from 'tiny-invariant';
import { bindActionCreators } from 'redux';
import { Provider } from 'react-redux';
import equal from 'deep-equal';
import { useMemo, useCallback } from 'use-memo-one';
import createStore from '../../state/create-store';
import createDimensionMarshal from '../../state/dimension-marshal/dimension-marshal';
import canStartDrag from '../../state/can-start-drag';
import scrollContainer from '../container/scroll-container';
import scrollWindow from '../window/scroll-window';
import createAutoScroller from '../../state/auto-scroller';
import useStyleMarshal from '../use-style-marshal/use-style-marshal';
import throwIfRefIsInvalid from '../throw-if-invalid-inner-ref';
import useFocusMarshal from '../use-focus-marshal';
import useRegistry from '../../state/registry/use-registry';
import type { Registry } from '../../state/registry/registry-types';
import type { FocusMarshal } from '../use-focus-marshal/focus-marshal-types';
import type { AutoScroller } from '../../state/auto-scroller/auto-scroller-types';
import type { StyleMarshal } from '../use-style-marshal/style-marshal-types';
import type {
  DimensionMarshal,
  Callbacks as DimensionMarshalCallbacks,
} from '../../state/dimension-marshal/dimension-marshal-types';
import type {
  DraggableId,
  State,
  Responders,
  Announce,
  Sensor,
  ElementId,
} from '../../types';
import type { Store, Action } from '../../state/store-types';
import StoreContext from '../context/store-context';
import {
  clean,
  move,
  publishWhileDragging,
  updateDroppableScroll,
  updateDroppableIsEnabled,
  updateDroppableIsCombineEnabled,
  collectionStarting,
  moveByWindowScroll,
} from '../../state/action-creators';
import isMovementAllowed from '../../state/is-movement-allowed';
import useAnnouncer from '../use-announcer';
import useDragHandleDescription from '../use-lift-instruction';
import AppContext, { type AppContextValue } from '../context/app-context';
import useStartupValidation from './use-startup-validation';
import usePrevious from '../use-previous-ref';
import { warning } from '../../dev-warning';
import getContainerScroll from '../container/get-container-scroll';
import useSensorMarshal from '../use-sensor-marshal/use-sensor-marshal';
import { pure } from 'recompose';

type Props = {|
  ...Responders,
  contextId: string,
  setOnError: (onError: Function) => void,
  // we do not technically need any children for this component
  children: Node | null,

  // sensors
  sensors?: Sensor[],
  enableDefaultSensors?: ?boolean,
  liftInstruction: string,
|};

const createResponders = (props: Props): Responders => ({
  onBeforeDragStart: props.onBeforeDragStart,
  onDragStart: props.onDragStart,
  onDragEnd: props.onDragEnd,
  onDragUpdate: props.onDragUpdate,
});

// flow does not support MutableRefObject
// type LazyStoreRef = MutableRefObject<?Store>;
type LazyStoreRef = {| current: ?Store |};

function getStore(lazyRef: LazyStoreRef): Store {
  invariant(lazyRef.current, 'Could not find store from lazy ref');
  return lazyRef.current;
}

function App(props: Props) {
  const { contextId, setOnError, sensors, liftInstruction, childComponent } = props;
  const lazyStoreRef: LazyStoreRef = useRef<?Store>(null);
  const draggableRef = useRef(null);

  useStartupValidation();

  // lazy collection of responders using a ref - update on ever render
  const lastPropsRef = usePrevious<Props>(props);

  const getResponders: () => Responders = useCallback(() => {
    return createResponders(lastPropsRef.current);
  }, [lastPropsRef]);

  const announce: Announce = useAnnouncer(contextId);

  const liftInstructionId: ElementId = useDragHandleDescription(
    contextId,
    liftInstruction,
  );
  const styleMarshal: StyleMarshal = useStyleMarshal(contextId);

  const lazyDispatch: Action => void = useCallback((action: Action): void => {
    getStore(lazyStoreRef).dispatch(action);
  }, []);

  const callbacks: DimensionMarshalCallbacks = useMemo(
    () =>
      bindActionCreators(
        {
          publishWhileDragging,
          updateDroppableScroll,
          updateDroppableIsEnabled,
          updateDroppableIsCombineEnabled,
          collectionStarting,
        },
        // $FlowFixMe - not sure why this is wrong
        lazyDispatch,
      ),
    [lazyDispatch],
  );

  const registry: Registry = useRegistry();

  const getDraggableRef = useCallback(() => {
    return draggableRef.current;
  }, []);

  const dimensionMarshal: DimensionMarshal = useMemo<DimensionMarshal>(() => {
    return createDimensionMarshal(registry, callbacks, { getContainer: getDraggableRef });
  }, [registry, callbacks, getDraggableRef]);

  const modifiedScrollWindow = useCallback((change) => {
    const current: Store = getStore(lazyStoreRef);
    if (!getIsMovementAllowed()) {
      return;
    }

    if (!draggableRef.current) {
      return scrollWindow(change);
    }
    scrollContainer(draggableRef.current, change);
  }, [getIsMovementAllowed]);

  const autoScroller: AutoScroller = useMemo<AutoScroller>(
    () =>
      createAutoScroller({
        scrollWindow: modifiedScrollWindow,
        scrollDroppable: dimensionMarshal.scrollDroppable,
        ...bindActionCreators(
          {
            move,
          },
          // $FlowFixMe - not sure why this is wrong
          lazyDispatch,
        ),
      }),
    [dimensionMarshal.scrollDroppable, lazyDispatch],
  );

  const focusMarshal: FocusMarshal = useFocusMarshal(contextId);

  const store: Store = useMemo<Store>(
    () =>
      createStore({
        announce,
        autoScroller,
        dimensionMarshal,
        focusMarshal,
        getResponders,
        styleMarshal,
      }),
    [
      announce,
      autoScroller,
      dimensionMarshal,
      focusMarshal,
      getResponders,
      styleMarshal,
    ],
  );

  // Checking for unexpected store changes
  if (process.env.NODE_ENV !== 'production') {
    if (lazyStoreRef.current && lazyStoreRef.current !== store) {
      warning('unexpected store change');
    }
  }

  // assigning lazy store ref
  lazyStoreRef.current = store;

  const tryResetStore = useCallback(() => {
    const current: Store = getStore(lazyStoreRef);
    const state: State = current.getState();
    if (state.phase !== 'IDLE') {
      current.dispatch(clean({ shouldFlush: true }));
    }
  }, []);

  // doing this in render rather than a side effect so any errors on the
  // initial mount are caught
  setOnError(tryResetStore);

  const getCanLift = useCallback(
    (id: DraggableId) => canStartDrag(getStore(lazyStoreRef).getState(), id),
    [],
  );

  const getIsMovementAllowed = useCallback(
    () => isMovementAllowed(getStore(lazyStoreRef).getState()),
    [],
  );

  const appContext: AppContextValue = useMemo(
    () => ({
      marshal: dimensionMarshal,
      focus: focusMarshal,
      contextId,
      canLift: getCanLift,
      isMovementAllowed: getIsMovementAllowed,
      liftInstructionId,
      registry,
      lazyDispatch,
    }),
    [
      contextId,
      dimensionMarshal,
      focusMarshal,
      getCanLift,
      getIsMovementAllowed,
      liftInstructionId,
      registry,
      lazyDispatch,
    ],
  );

  const notifyScrollToWindow = useCallback(() => {
    const current: Store = getStore(lazyStoreRef);
    if (!getIsMovementAllowed()) {
      return;
    }
    current.dispatch(
      moveByWindowScroll({
        newScroll: getContainerScroll(draggableRef.current),
      }),
    );
  }, [getIsMovementAllowed]);

  const measuredRef = useCallback(
    ref => {
      if (ref === null) {
        return;
      }

      if (ref === draggableRef.current) {
        return;
      }

      if (draggableRef.current) {
        draggableRef.current.removeEventListener('scroll', notifyScrollToWindow);
      }

      // At this point the ref has been changed or initially populated

      draggableRef.current = ref;
      if (ref) {
        ref.addEventListener('scroll', notifyScrollToWindow);
      }
      throwIfRefIsInvalid(ref);
    },
    [notifyScrollToWindow],
  );

  useSensorMarshal({
    contextId,
    store,
    registry,
    customSensors: sensors,
    // default to 'true' unless 'false' is explicitly passed
    enableDefaultSensors: props.enableDefaultSensors !== false,
  });

  // Clean store when unmounting
  useEffect(() => {
    return tryResetStore;
  }, [tryResetStore]);

  const ChildComponent = childComponent;
  return (
    <AppContext.Provider value={appContext}>
      <Provider context={StoreContext} store={store}>
        {ChildComponent ? <ChildComponent measuredRef={measuredRef} {...props} /> : props.children(measuredRef)}
      </Provider>
    </AppContext.Provider>
  );
}
const arePropsEqual = (prevProps, nextProps) => {
  if (prevProps !== nextProps) {
    const isEqual = equal(prevProps, nextProps);
    return isEqual;
  }
  return prevProps === nextProps;
};

export default memo(App, arePropsEqual);
