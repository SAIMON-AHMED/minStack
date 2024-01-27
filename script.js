class MinStack {

    constructor() {
        
        this.stack = [];
        this.minStack = [];

    }

    push(val) {

        this.stack.push(val);

        if (this.minStack.length === 0) {
            this.minStack.push(val);
        } else if (this.minStack[this.minStack.length - 1] >= val) {
            this.minStack.push(val)
        }
    }
    pop() {
        if (this.minStack[this.minStack.length - 1] === this.stack[this.stack.length - 1]) {
            this.minStack.pop();
        }
        this.stack.pop();
    }
    top() {
        return this.stack[this.stack.length - 1];
    }
    
    getMin() {
        if (this.minStack.length !== 0) {
            return this.minStack[this.minStack.length - 1];
        } else {
            return -1;
        }
        
    }

}
