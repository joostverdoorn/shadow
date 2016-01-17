import { Observable } from 'sonicjs/dist/observable';
export var Mouse;
(function (Mouse) {
    Mouse.move = Observable.create((subject) => {
        document.body.addEventListener("mousemove", subject.onNext);
    });
})(Mouse || (Mouse = {}));
export default Mouse;
//# sourceMappingURL=mouse.js.map