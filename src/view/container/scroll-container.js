// @flow
import { type Position } from 'css-box-model';

// Not guarenteed to scroll by the entire amount
export default (container, change: Position): void => {
  container.scrollBy(change.x, change.y);
};
