// @flow
import { getRect, type Rect, type Position } from 'css-box-model';
import type { Viewport } from '../../types';
import { origin } from '../../state/position';
import getContainerScroll from './get-container-scroll';
import getMaxContainerScroll from './get-max-container-scroll';
import getDocumentElement from '../get-document-element';

export default (container): Viewport => {
  const scroll: Position = getContainerScroll(container);
  const maxScroll: Position = getMaxContainerScroll(container);

  const { top, left, width, height, right, bottom } = container.getBoundingClientRect();
  const scrollTop: number = top + scroll.y;
  const scrollLeft: number = left + scroll.x;

  // // container.innerHeight: includes scrollbars (not what we want)
  // // container.clientHeight gives us the correct value when using the html5 doctype

  // // Using these values as they do not consider scrollbars
  // // padding box, without scrollbar
  // const width: number = container.clientWidth;
  // const height: number = container.clientHeight;

  // // Computed
  const scrollRight: number = scrollLeft + width;
  const scrollBottom: number = scrollTop + height;

  const frame: Rect = getRect({
    top: scrollTop,
    left: scrollLeft,
    right: scrollRight,
    bottom: scrollBottom,
  });

  const viewport: Viewport = {
    frame,
    scroll: {
      initial: scroll,
      current: scroll,
      max: maxScroll,
      diff: {
        value: origin,
        displacement: origin,
      },
    },
  };

  return viewport;
};
