/*
Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

Implement the MyQueue class:

void push(int x) Pushes element x to the back of the queue.
int pop() Removes the element from the front of the queue and returns it.
int peek() Returns the element at the front of the queue.
boolean empty() Returns true if the queue is empty, false otherwise.
Notes:

You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.
*/


var MyQueue = function() {
    this.stack = [];
    this.reversed = [];
};

/*
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stack.push(x);
};

/*
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if(!this.reversed.length) {
        while(this.stack.length) {
            this.reversed.push(this.stack.pop());
        }
    }

    return this.reversed.pop();
};

/*
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.reversed[this.reversed.length - 1] ?? this.stack[0];
};

/*
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return !this.stack.length && !this.reversed.length;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

/*
Runtime: 70 ms, faster than 65.94% of JavaScript online submissions for Implement Queue using Stacks.
Memory Usage: 42.1 MB, less than 49.88% of JavaScript online submissions for Implement Queue using Stacks.
*/

