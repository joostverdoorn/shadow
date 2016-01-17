import { Store } from 'sonicjs/dist/store';
import { Patch } from 'sonicjs/dist/patch';
import { State } from 'sonicjs/dist/state';
export declare type DOMState = State<number, Node>;
export declare type DOMPatch = Patch<number, Node>;
export declare type DOMStore = Store<number, Node>;
export declare module DOMStore {
    function fromElement(element: Node): DOMStore;
}
export default DOMStore;
