class Stack {
    constructor() {
        this.items = [];
    }

    // Pushes an element onto the stack
    push(element) {
        this.items.push(element);
    }

    // Removes and returns the top element from the stack
    pop() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.pop();
    }

    // Returns the top element without removing it
    peek() {
        if (this.isEmpty()) {
            return "No elements in Stack";
        }
        return this.items[this.items.length - 1];
    }

    // Returns true if the stack is empty, false otherwise
    isEmpty() {
        return this.items.length === 0;
    }

    // Returns the size of the stack
    size() {
        return this.items.length;
    }
}

// Example usage
const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.peek()); // Output: 2
console.log(stack.pop());  // Output: 2
console.log(stack.isEmpty()); // Output: false
console.log(stack.size()); // Output: 1
