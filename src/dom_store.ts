import { Store }               from 'sonicjs/dist/store';
import { Patch }               from 'sonicjs/dist/patch';
import { State }               from 'sonicjs/dist/state';
import { Range as _Range, Position }     from 'sonicjs/dist/range';
import { AsyncIterator }       from 'sonicjs/dist/async_iterator';
import { Observable, Subject } from 'sonicjs/dist/observable';

export type DOMState = State<number, Node>;
export type DOMPatch = Patch<number, Node>;
export type DOMStore = Store<number, Node>;

export module DOMStore {
  export function fromElement(element: Node): DOMStore {
    var store: DOMStore;
    const state: DOMState = State.fromArray(<any>Array.prototype.slice.call(element.childNodes));

    async function mapMutation(state: DOMState, mutation: MutationRecord): Promise<DOMPatch> {
      var baseIndex = mutation.previousSibling ? await AsyncIterator.indexOf(State.values(state), mutation.previousSibling) : await State.size(state);
      const range: _Range<number> = [{
          next: mutation.previousSibling ? baseIndex : null
        }, {
          prev: mutation.nextSibling ? await AsyncIterator.indexOf(State.values(state), mutation.nextSibling): null
        }],
            // The keyBy ensures the added nodes have the same index as they will have in the childNodes of the element.
            // Note: there is probably a more efficient was to do this.
            added = mutation.addedNodes.length > 0 ? State.keyBy(State.fromArray<Node>(<any>mutation.addedNodes), (value) => ++baseIndex) : undefined;

      return {range, added};
    }

    // Map DOM mutation to outgoing patches
    const subjectOut = Subject.create<DOMPatch>(),
      observer = new MutationObserver( async (mutations) => {
        console.log("Number of mutations: ",mutations.length)
        mutations.reduce( async (memo, mutation) => {
          // Note: these patches may be inaccurate. WIP
          await memo;
          const patch = await mapMutation(store.state, mutation);
          return subjectOut.onNext(patch);
        }, Promise.resolve());
      });

    observer.observe(element, {
      // attributes: true,
      childList: true,
      // characterData: true
    });

    async function mapRange(state: DOMState, [from, to]: _Range<number>): Promise<Range> {
      async function mapPosition(state: DOMState, pos: Position<number>): Promise<Position<Node>> {
        if (Position.isPrevPosition(pos)) {
          if (pos.prev != null) return {prev: await state.get(pos.prev)};
          else return {next: await state.prev(null).then(state.get)};
        }

        if (Position.isNextPosition(pos)) {
          if (pos.next != null) return {next: await state.get(pos.next)};
          else return {prev: await state.next(null).then(state.get)};
        }
      }

      const mappedFrom = await mapPosition(state, from),
            mappedTo   = await mapPosition(state, to),
            range = new Range();

      if (Position.isPrevPosition(mappedFrom)) range.setStartBefore(mappedFrom.prev);
      else range.setStartAfter(mappedFrom.next);

      if (Position.isPrevPosition(mappedTo)) range.setEndBefore(mappedTo.prev);
      else range.setEndAfter(mappedTo.next);

      return range;
    }

    // Handle incoming patches by mutating the DOM
    const subjectIn = Subject.create<DOMPatch>();
    subjectIn.subscribe({
      onNext: async (patch: DOMPatch) => {
        const range = await mapRange(store.state, patch.range),
              added = patch.added ? await AsyncIterator.reduce(State.values(patch.added), (df, node) => {df.appendChild(node); return df}, new DocumentFragment) : undefined;

        range.deleteContents();
        if (added) range.insertNode(added);

      },
      onComplete: (res) => {
        observer.disconnect();
        subjectOut.onComplete(res);
      }
    });

    // This reducer ensures the new state always reflects the DOM. This is probably not efficient, but
    // for purposes of consistency, it will do for now.
    async function reducer(state: DOMState, patch: DOMPatch): Promise<DOMState> {
      return State.fromArray(<any>Array.prototype.slice.call(element.childNodes));
    }

    return store = Store.create(state, {subscribe: subjectOut.subscribe, onNext: subjectIn.onNext}, reducer );
  }
}

export default DOMStore;
