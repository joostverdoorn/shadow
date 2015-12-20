import { Observable, Subject } from 'sonicjs/dist/observable';

export module Keyboard {
  export const keydown: Observable<KeyboardEvent> = Observable.create<KeyboardEvent>((subject) => {
    document.body.addEventListener("keydown", subject.onNext);
  })
}

export default Keyboard;
