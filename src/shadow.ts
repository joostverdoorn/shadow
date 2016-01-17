
import _Keyboard from './keyboard';
import _Mouse    from './mouse';
import _DOMStore from './dom_store';

import _Sonic    from 'sonicjs/dist/sonic';
import {Observable} from 'sonicjs/dist/observable';

function Shadow<V>(element: HTMLElement): _DOMStore {
  return _DOMStore.fromElement(element);
}

module Shadow {
  export const Sonic = _Sonic;
  
  export const Keyboard = _Keyboard;
  export const Mouse = _Mouse;

  export const DOMStore = _DOMStore;
};

export default Shadow;
declare const module: any;
module.exports = Shadow;
