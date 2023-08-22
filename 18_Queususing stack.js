var queue = function() {
    this.stack1 = [];
    this.stack2 = [];
}


queue.prototype.enqueue = function(val) {


    this.stack1.push(val);

}

queue.prototype.dequeue = function() {
    if (this.stack1.length === 0) {
        while (this.stack2.length != 0) {
            this.stack1.push(this.stack2.pop());
        }
    }
    return this.stack1.pop();
}

queue.prototype.printQueue = function() {
    for (let i in this.stack1) {
        console.log(this.stack1[i]);
    }
}

const queue1 = new queue();
queue1.enqueue(10);
queue1.enqueue(20);
queue1.enqueue(30);
queue1.printQueue();