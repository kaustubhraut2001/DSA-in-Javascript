var stack = function() {
    this.queue1 = [];
    this.queue2 = [];

}

stack.prototype.push = function(val) {
    while (this.queue1.length != 0) {
        this.queue2.push(this.queue1.shift());
    }
    this.queue1.push(val);
    while (this.queue2.length != 0) {
        this.queue1.push(this.queue2.shift());
    }

}

stack.prototype.pop = function() {
    if (this.queue1.length === 0) {
        return "Stack is empty";
    }
    return this.queue1.shift();
}

stack.prototype.printStack = function() {
    for (let i in this.queue1) {
        console.log(this.queue1[i]);
    }
}

const stack1 = new stack();
stack1.push(10);
stack1.push(20);
stack1.push(30);
stack1.printStack();