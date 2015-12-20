import { Observable, Subject } from 'sonicjs/dist/observable';

export module Mouse {
  export const move: Observable<MouseEvent> = Observable.create<MouseEvent>((subject) => {
    document.body.addEventListener("mousemove", subject.onNext);
  })
}

export default Mouse;
