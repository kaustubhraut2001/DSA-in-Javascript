class Queue {
    constructor() {
        this.items = [];






    }

    enqueue(element) {
        this.items.push(element);
    }
    isEmpty() {

        return this.items.length === 0;
    }
    dequeue() {
        if (this.isEmpty()) {
            return "Underflow";

        }
        return this.items.shift();
    }

    front() {
        if (this.isEmpty()) {
            return "No elements in Queue";
        }
        return this.items[0];
    }

    size() {
        return this.items.length;
    }

    printQueue() {

        for (let i in this.items) {
            console.log(this.items[i]);

        }
    }

}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
// queue.printQueue();
queue.dequeue();
// queue.printQueue();
console.log(queue.front());