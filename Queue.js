
class Queue {
    constructor() {
        this._header = new NPos(null, null, null);
        this._trailer = new NPos(null, this._header, null);
        this._header._next = this._trailer;
        this._size = 0;
    }
    isFirst(p) {
        return (this._header == p._prev);
    }
    isLast(p) {
        return (this._trailer == p._next);
    }
    size() {
        return this._size;
    }
    isEmpty() {
        return this._size == 0;
    }
    first() {
        if (this.isEmpty()) {
            throw new Error("Invalid first() on an empty List");
        } else {
            return this._header._next;
        }
    }
    last() {
        if (this.isEmpty()) {
            throw new Error("Invalid last() on an empty List");
        } else {
            return this._trailer._prev;
        }
    }
    after(p) {
        if (p._next == this._trailer) {
            throw new Error("Invalid after(p)--off the end");
        }
        return p._next;
    }
    before(p) {
        if (p._prev == this._header) {
            throw new Error("Invalid before(p)--off the front");
        }
        return p._prev;
    }
    replaceElement(p, elem) {
        let oldElem = p._elem;
        p._elem = _elem;
        return oldElem;
    }
    swapElements(p, q) {
        let temp = p._elem;
        p._elem = q._elem;
        q._elem = temp;
    }
    insertAfter(p, elem) {
        let newNode = new NPos(elem, p, p._next);
        this._size++;
        return newNode;
    }
    insertBefore(p, elem) {
        let newNode = new NPos(elem, p._prev, p);
        this._size++;
        return newNode;
    }
    insertFirst(elem) {
        let newNode = new NPos(elem, this._header, this._header._next);
        this._size++;
        return newNode;
    }
    insertLast(elem) {
        let newNode = new NPos(elem, this._trailer._prev, this._trailer);
        this._size++;
        return newNode;
    }
    remove(p) {
        p._prev._next = p._next;
        p._next._prev = p._prev;
        p._prev = null;  // should no longer reference a Position in the List
        p._next = null;
        this._size--;
    }
    print() {
        let res = "[";
        let iter = this.interator();
        while (iter.hasNext()) {
            res = res + iter.nextObject();
            if (iter.hasNext()) {
                res = res + ", ";
            }
        }
        console.log(res + "]\n");
    }
    interator() {
        return new ListIterator(this);
    }

    findMiddle() {
        if (this.isEmpty()) {
            alert("The stack is empty");
            return null;
        } else {
            let p = this.first()
            let q = this.last();
            if (this.size() % 2 == 0) {
                p = this.after(p);
            }
            while (p !== q) {
                p = this.after(p);
                q = this.before(q);
            }
            return p;
        }
    }



    dequeue() {
        this.remove(this.first())
    }

    enqueue(e) {
        this.insertLast(e)
    }
}

var tst0 = new Queue();
tst0.print();
var tst1 = new Queue();
tst1.insertFirst(5);
tst1.print();
var tst2 = new Queue();
tst2.print();
tst2.insertFirst(1);
tst2.print();
tst2.insertLast(3);
tst2.print();
tst2.insertAfter(tst2.before(tst2.after(tst2.first())), 2);
tst2.print();
tst2.remove(tst2.after(tst2.first()));
tst2.print();
tst2.insertFirst(0);
tst2.insertLast(4);
tst2.insertLast(7);
tst2.insertLast(9);
tst2.enqueue(10);
tst2.enqueue(11);
tst2.dequeue();


tst2.insertAfter(tst2.after(tst2.first()), 2);
tst2.print();
tst2.findMiddle()
console.log(tst2.after(tst2.after(tst2.after(tst2.first()))).element());
console.log("first = " + tst2.first().element());
console.log("last  = " + tst2.last().element());
console.log(tst2.findMiddle());





