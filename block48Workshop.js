//  Question #1
function isValid(s) {
    const stack = [];
    const matchingBrackets = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else if (char === ')' || char === '}' || char === ']') {
            if (stack.length === 0 || stack.pop() !== matchingBrackets[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

const s = "()";
console.log(isValid(s));

// Question #2
function timeRequiredToBuy(tickets, k) {
    let time = 0;

    while (true) {
        for (let i = 0; i < tickets.length; i++) {
            if (tickets[i] > 0) {
                tickets[i]--;
                time++;
                if (i === k && tickets[i] === 0) {
                    return time;
                }
            }
        }
    }
}

const tickets = [2, 3, 2];
const k = 2;
console.log(timeRequiredToBuy(tickets, k));

// Question #3
function heightChecker(heights) {
    const sortedHeights = [...heights].sort((a, b) => a - b);
    
    let count = 0;
    
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== sortedHeights[i]) {
            count++;
        }
    }
    
    return count;
}

const heights = [1, 1, 4, 2, 1, 3];
console.log(heightChecker(heights));

// Question #4
function deckRevealedIncreasing(deck) {

    deck.sort((a, b) => a - b);

    let queue = [];
    
    for (let i = deck.length - 1; i >= 0; i--) {
        if (queue.length > 0) {
            queue.unshift(queue.pop());
        }
        queue.unshift(deck[i]);
    }
    
    return queue;
}

const deck = [17, 13, 11, 2, 3, 5, 7];
console.log(deckRevealedIncreasing(deck));