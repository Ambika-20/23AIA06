//this is file for minheap implementation
export default class MinHeap {
    constructor(compare) {
        this.heap = [];
        this.compare = compare;
    }

    size()
    {
        return this.heap.length;
    }

    peek()
    {
        return this.heap[0];
    }

    insert(value)
    {
        this.heap.push(value);
        this.heapifyUp();
    }

    remove()
    {
        if (this.heap.length === 1) return this.heap.pop();
        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return root;
    }
}