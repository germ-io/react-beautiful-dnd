// @flow
import React, { memo, useMemo } from 'react';
import { pure } from 'recompose';
import diff from 'deep-diff';
import equal from 'deep-equal';
import type { DraggableId } from '../../types';
import type { PublicOwnProps, PrivateOwnProps } from './draggable-types';
import ConnectedDraggable from './connected-draggable';
import useRequiredContext from '../use-required-context';
import DroppableContext, {
  type DroppableContextValue,
} from '../context/droppable-context';

const arePropsEqual = (prevProps, nextProps) => {
  if (prevProps !== nextProps) {
    const isEqual = equal(prevProps, nextProps);
    return isEqual;
  }
  return prevProps === nextProps;
}

const ImpurePrivateDraggable = function ImpurePrivateDraggable(props: PrivateOwnProps) {
  const droppableContext: DroppableContextValue = useRequiredContext(
    DroppableContext,
  );

  // The droppable can render a clone of the draggable item.
  // In that case we unmount the existing dragging item
  const isUsingCloneFor: ?DraggableId = droppableContext.isUsingCloneFor;
  return useMemo(() => {
    if (isUsingCloneFor === props.draggableId && !props.isClone) {
      return null;
    }
    return <ConnectedDraggable {...props} />;
  }, [isUsingCloneFor]);
}

export const PrivateDraggable = pure(ImpurePrivateDraggable);

export const PublicDraggable = class PublicDraggable extends React.PureComponent {
  render() {
    const props = this.props;
    // default values for props
    const isEnabled: boolean =
      typeof props.isDragDisabled === 'boolean' ? !props.isDragDisabled : true;
    const canDragInteractiveElements: boolean = Boolean(
      props.disableInteractiveElementBlocking,
    );
    const shouldRespectForcePress: boolean = Boolean(
      props.shouldRespectForcePress,
    );

    return (
      <ConnectedDraggable
        {...props}
        isClone={false}
        isEnabled={isEnabled}
        canDragInteractiveElements={canDragInteractiveElements}
        shouldRespectForcePress={shouldRespectForcePress}
      />
    );
  }
}

