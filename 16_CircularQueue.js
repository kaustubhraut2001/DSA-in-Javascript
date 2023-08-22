const circularqueu = function(n) {

    this.queue = [];
    this.size = n;


}

circularqueu.prototype.enqueue = function(element) {
    if (this.queue.length === this.size) {
        return "Queue is full";
    }
    this.queue.push(element);
}

circularqueu.prototype.dequeue = function() {
    if (this.queue.length === 0) {
        return "Queue is empty";
    }
    return this.queue.shift();
}

circularqueu.prototype.front = function() {
    if (this.queue.length === 0) {
        return "Queue is empty";
    }
    return this.queue[0];
}

circularqueu.prototype.rear = function() {
    if (this.queue.length === 0) {
        return "Queue is empty";
    }
    return this.queue[this.queue.length - 1];
}

circularqueu.prototype.printQueue = function() {
    for (let i in this.queue) {
        console.log(this.queue[i]);
    }


}

circularqueu.prototype.isFull = function() {
    if (this.queue.length === this.size) {
        return true;
    }
    return false;
}

const queue = new circularqueu(5);
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.enqueue(60);
queue.dequeue();
// queue.printQueue();
console.log(queue.front());