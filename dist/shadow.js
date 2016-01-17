import _Keyboard from './keyboard';
import _Mouse from './mouse';
import _DOMStore from './dom_store';
import _Sonic from 'sonicjs/dist/sonic';
function Shadow(element) {
    return _DOMStore.fromElement(element);
}
var Shadow;
(function (Shadow) {
    Shadow.Sonic = _Sonic;
    Shadow.Keyboard = _Keyboard;
    Shadow.Mouse = _Mouse;
    Shadow.DOMStore = _DOMStore;
})(Shadow || (Shadow = {}));
;
export default Shadow;
module.exports = Shadow;
//# sourceMappingURL=shadow.js.map