// @flow
import { getRect, type Rect } from 'css-box-model';
import type { Position } from 'css-box-model';
import { subtract, negate } from './position';
import type { Viewport } from '../types';

export default (viewport: Viewport, newScroll: Position): Viewport => {
  const diff: Position = subtract(newScroll, viewport.scroll.initial);
  const displacement: Position = negate(diff);

  // We need to update the frame so that it is always a live value
  // The top / left of the frame should always match the newScroll position
  const { top, left, bottom, right } = viewport.frame;
  const { x: currentX, y: currentY } = viewport.scroll.current;
  const { x: newX, y: newY } = newScroll;
  const newTop = top - currentY + newY;
  const newLeft = left - currentX + newX;
  const frame: Rect = getRect({
    top: newTop,
    bottom: newTop + viewport.frame.height,
    left: newLeft,
    right: newLeft + viewport.frame.width,
  });

  const updated: Viewport = {
    frame,
    scroll: {
      initial: viewport.scroll.initial,
      max: viewport.scroll.max,
      current: newScroll,
      diff: {
        value: diff,
        displacement,
      },
    },
  };

  return updated;
};
