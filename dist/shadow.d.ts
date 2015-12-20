import _Keyboard from './keyboard';
import _Mouse from './mouse';
import _Sonic from 'sonicjs/dist/sonic';
declare function Shadow<V>(obj: any): any;
declare module Shadow {
    const Sonic: typeof _Sonic;
    const Keyboard: typeof _Keyboard;
    const Mouse: typeof _Mouse;
}
export default Shadow;
