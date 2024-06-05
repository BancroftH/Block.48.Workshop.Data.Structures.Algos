// Define the Stack class
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

// Create a new stack
const stack = new Stack();

// Push each character of the string onto the stack
const inputString = "Hello, world!";

for (let i = 0; i < inputString.length; i++) {
    stack.push(inputString[i]);
}

// Pop each character from the stack to get the reversed string
let reversedString = "";

while (!stack.isEmpty()) {
    reversedString += stack.pop();
}

console.log(reversedString); // Output: "!dlrow ,olleH"

let queue = [];

// Add elements to the queue
queue.push(10);
queue.push(20);
queue.push(30);

// Remove an element from the front of the queue
let firstElement = queue.shift();
console.log(firstElement); // Output: 10

// View the first element in the queue without removing it
let frontElement = queue[0];
console.log(frontElement); // Output: 20

// Check if the queue is empty
let isEmpty = queue.length === 0;
console.log(isEmpty); // Output: false

// Bubble sort function
function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) {
        for (var j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

// Example usage of bubbleSort
let array = [64, 34, 25, 12, 22, 11, 90];
bubbleSort(array);
console.log(array); // Output: [11, 12, 22, 25, 34, 64, 90]