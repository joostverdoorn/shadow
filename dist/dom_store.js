var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, Promise, generator) {
    return new Promise(function (resolve, reject) {
        generator = generator.call(thisArg, _arguments);
        function cast(value) { return value instanceof Promise && value.constructor === Promise ? value : new Promise(function (resolve) { resolve(value); }); }
        function onfulfill(value) { try { step("next", value); } catch (e) { reject(e); } }
        function onreject(value) { try { step("throw", value); } catch (e) { reject(e); } }
        function step(verb, value) {
            var result = generator[verb](value);
            result.done ? resolve(result.value) : cast(result.value).then(onfulfill, onreject);
        }
        step("next", void 0);
    });
};
import { Store } from 'sonicjs/dist/store';
import { State } from 'sonicjs/dist/state';
import { Position } from 'sonicjs/dist/range';
import { AsyncIterator } from 'sonicjs/dist/async_iterator';
import { Subject } from 'sonicjs/dist/observable';
export var DOMStore;
(function (DOMStore) {
    function fromElement(element) {
        var store;
        const state = State.fromArray(Array.prototype.slice.call(element.childNodes));
        function mapMutation(state, mutation) {
            return __awaiter(this, void 0, Promise, function* () {
                var baseIndex = mutation.previousSibling ? yield AsyncIterator.indexOf(State.values(state), mutation.previousSibling) : yield State.size(state);
                const range = [{
                        next: mutation.previousSibling ? baseIndex : null
                    }, {
                        prev: mutation.nextSibling ? yield AsyncIterator.indexOf(State.values(state), mutation.nextSibling) : null
                    }], added = mutation.addedNodes.length > 0 ? State.keyBy(State.fromArray(mutation.addedNodes), (value) => ++baseIndex) : undefined;
                return { range, added };
            });
        }
        const subjectOut = Subject.create(), observer = new MutationObserver((mutations) => __awaiter(this, void 0, Promise, function* () {
            console.log("Number of mutations: ", mutations.length);
            mutations.reduce((memo, mutation) => __awaiter(this, void 0, Promise, function* () {
                yield memo;
                const patch = yield mapMutation(store.state, mutation);
                return subjectOut.onNext(patch);
            }), Promise.resolve());
        }));
        observer.observe(element, {
            childList: true,
        });
        function mapRange(state, [from, to]) {
            return __awaiter(this, void 0, Promise, function* () {
                function mapPosition(state, pos) {
                    return __awaiter(this, void 0, Promise, function* () {
                        if (Position.isPrevPosition(pos)) {
                            if (pos.prev != null)
                                return { prev: yield state.get(pos.prev) };
                            else
                                return { next: yield state.prev(null).then(state.get) };
                        }
                        if (Position.isNextPosition(pos)) {
                            if (pos.next != null)
                                return { next: yield state.get(pos.next) };
                            else
                                return { prev: yield state.next(null).then(state.get) };
                        }
                    });
                }
                const mappedFrom = yield mapPosition(state, from), mappedTo = yield mapPosition(state, to), range = new Range();
                if (Position.isPrevPosition(mappedFrom))
                    range.setStartBefore(mappedFrom.prev);
                else
                    range.setStartAfter(mappedFrom.next);
                if (Position.isPrevPosition(mappedTo))
                    range.setEndBefore(mappedTo.prev);
                else
                    range.setEndAfter(mappedTo.next);
                return range;
            });
        }
        const subjectIn = Subject.create();
        subjectIn.subscribe({
            onNext: (patch) => __awaiter(this, void 0, Promise, function* () {
                const range = yield mapRange(store.state, patch.range), added = patch.added ? yield AsyncIterator.reduce(State.values(patch.added), (df, node) => { df.appendChild(node); return df; }, new DocumentFragment) : undefined;
                range.deleteContents();
                if (added)
                    range.insertNode(added);
            }),
            onComplete: (res) => {
                observer.disconnect();
                subjectOut.onComplete(res);
            }
        });
        function reducer(state, patch) {
            return __awaiter(this, void 0, Promise, function* () {
                return State.fromArray(Array.prototype.slice.call(element.childNodes));
            });
        }
        return store = Store.create(state, { subscribe: subjectOut.subscribe, onNext: subjectIn.onNext }, reducer);
    }
    DOMStore.fromElement = fromElement;
})(DOMStore || (DOMStore = {}));
export default DOMStore;
//# sourceMappingURL=dom_store.js.map