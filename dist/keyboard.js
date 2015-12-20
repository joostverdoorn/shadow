import { Observable } from 'sonicjs/dist/observable';
export var Keyboard;
(function (Keyboard) {
    Keyboard.keydown = Observable.create((subject) => {
        document.body.addEventListener("keydown", subject.onNext);
    });
})(Keyboard || (Keyboard = {}));
export default Keyboard;
//# sourceMappingURL=keyboard.js.map