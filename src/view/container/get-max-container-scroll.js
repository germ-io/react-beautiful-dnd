// @flow
import type { Position } from 'css-box-model';
import getMaxScroll from '../../state/get-max-scroll';
import getDocumentElement from '../get-document-element';

export default (container): Position => {

  const maxScroll: Position = getMaxScroll({
    // unclipped padding box, with scrollbar
    scrollHeight: container.scrollHeight,
    scrollWidth: container.scrollWidth,
    // clipped padding box, without scrollbar
    width: container.clientWidth,
    height: container.clientHeight,
  });

  return maxScroll;
};
