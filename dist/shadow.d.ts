import _Keyboard from './keyboard';
import _Mouse from './mouse';
import _DOMStore from './dom_store';
import _Sonic from 'sonicjs/dist/sonic';
declare function Shadow<V>(element: HTMLElement): _DOMStore;
declare module Shadow {
    const Sonic: typeof _Sonic;
    const Keyboard: typeof _Keyboard;
    const Mouse: typeof _Mouse;
    const DOMStore: typeof _DOMStore;
}
export default Shadow;
