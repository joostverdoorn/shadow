
import _Keyboard from './keyboard';
import _Mouse    from './mouse';

import _Sonic    from 'sonicjs/dist/sonic';
import {Observable} from 'sonicjs/dist/observable';

function Shadow<V>(obj: any): any {
  return null;
}

module Shadow {
  export const Sonic = _Sonic;
  export const Keyboard = _Keyboard;
  export const Mouse = _Mouse;
};

export default Shadow;
declare const module: any;
module.exports = Shadow;
