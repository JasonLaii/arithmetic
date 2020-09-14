/*
 * @Author: Jason
 * @Date: 2020-09-14 23:17:46
 * @Github: https://github.com/JasonLaii
 * @Description:
 * @LastEditTime: 2020-09-14 23:40:52
 */
/*
Implement the following operations of a queue using stacks.

push(x) -- Push element x to the back of queue.
pop() -- Removes the element from in front of queue.
peek() -- Get the front element.
empty() -- Return whether the queue is empty.
Example:

MyQueue queue = new MyQueue();

queue.push(1);
queue.push(2);
queue.peek();  // returns 1
queue.pop();   // returns 1
queue.empty(); // returns false
Notes:

You must use only standard operations of a stack -- which means only push to top, peek/pop from top, size, and is empty operations are valid.
Depending on your language, stack may not be supported natively. You may simulate a stack by using a list or deque (double-ended queue), as long as you use only standard operations of a stack.
You may assume that all operations are valid (for example, no pop or peek operations will be called on an empty queue).
*/

/**
 * @desc
 * @author jason
 * @param {array} stack
 * @date 2020-09-14 23:22:22
 * @return
 */
function Stack(stack) {
  this.stack = stack
}
Stack.prototype = {
  push() {
    return this.stack.push()
  },
  pop() {
    return this.stack.pop()
  },
}

function MyQueue(queue = []) {
  this.queue = queue
}
MyQueue.prototype = {
  empty() {
    return this.queue.length === 0
  },
  push(val) {
    this.queue.push(val)
  },
  pop() {
    var temp = []
    this.queue.forEach((item, index) => {
      index < this.queue.length && temp.push(this.queue.pop())
    })
    var front = this.queue.pop()
    temp.forEach((item, index) => {
      index < temp.length && this.queue.push(temp.pop())
    })
    return front
  },
  peek() {
    var temp = []
    this.queue.forEach((item, index) => {
      index < this.queue.length && temp.push(this.queue.pop())
    })
    var front = this.queue.pop()
    this.queue.push(front)
    temp.forEach((item, index) => {
      index < temp.length && this.queue.push(temp.pop())
    })
    return front
  },
  show() {
    console.log('queue', this.queue)
  },
}
;(function () {
  var queue = new MyQueue()
  queue.push(1)
  queue.push(2)
  console.log(queue.peek())
  queue.show()
  console.log(queue.pop())
  queue.show()
  console.log(queue.empty())
})()
