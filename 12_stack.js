class Stack {
    constructor() {
        this.stack = [];

    }
    push(el) {
        this.stack.push(el);

    }
    pop() {
        if (this.stack.length === 0) {
            return "underflow";
        }
        return this.stack.pop();

    }

    preek() {
        if (this.stack.length === 0)
            return "underflow";
        return this.stack[this.stack.length - 1];
    }

    size() {
        return this.stack.length;
    }

    prinet() {
        if (this.stack.length === 0) {
            return "underflow";

        }

        for (let i = 0; i < this.stack.length; i++) {
            console.log(this.stack[i]);

        }
    }
}


const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.size();
// console.log(stack.preek());
// console.log(stack.pop());
// stack.prinet();