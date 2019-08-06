/**
 * Implement the following operations of a queue using stacks.

 * push(x) -- Push element x to the back of queue.
 * pop() -- Removes the element from in front of queue.
 * peek() -- Get the front element.
 * empty() -- Return whether the queue is empty.
 * Example:

 * MyQueue queue = new MyQueue();

 * queue.push(1);
 * queue.push(2);  
 * queue.peek();  // returns 1
 * queue.pop();   // returns 1
 * queue.empty(); // returns false
 * Notes:

 * You must use only standard operations of a stack -- which means only push to top, peek/pop from top, size, and is empty operations are valid.
 * Depending on your language, stack may not be supported natively. You may simulate a stack by using a list or deque (double-ended queue), as long as you use only standard operations of a stack.
 * You may assume that all operations are valid (for example, no pop or peek operations will be called on an empty queue).
 */

var MyQueue = {
  stack: [],
  helpStack: [],
  push(val){
    let cur = null;
    while( (cur = this.stack.pop()) ){
      this.helpStack.push(cur);
    }
    this.helpStack.push(val);
    while( (cur = this.helpStack.pop()) ){
      this.stack.push(cur)
    }
  },
  peek(){
    return this.stack[this.stack.length - 1];
  },
  pop(){
    return this.stack.pop();
  },
  empty(){
    return this.stack.length === 0;
    
  }
}

MyQueue.push(1);
MyQueue.push(2);
console.log(MyQueue.peek());
console.log(MyQueue.pop());
console.log(MyQueue.empty())
