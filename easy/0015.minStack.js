
/**
 * 
 * Design a stack that supports push, pop, top, and retrieving(检索) the minimum element in constant time.

 * push(x) -- Push element x onto stack.
 * pop() -- Removes the element on top of the stack.
 * top() -- Get the top element.
 * getMin() -- Retrieve the minimum element in the stack.
 * Example:
 * MinStack minStack = new MinStack();
 * minStack.push(-2);
 * minStack.push(0);
 * minStack.push(-3);
 * minStack.getMin();   --> Returns -3.
 * minStack.pop();
 * minStack.top();      --> Returns 0.
 * minStack.getMin();   --> Returns -2.
 * 
 */

function MinStack(){
  this.top = 0;
  this.dataStore = new Array();
  this.push = push;   //添加元素
  this.pop = pop;     //删除栈顶元素
  this.peek = peek;   //返回栈顶元素
  this.getMin = getMin;//获取栈的最小值
}
function push(el){
  this.dataStore[this.top++] = el;
}
function pop(){
  this.dataStore.pop();
  return this.dataStore[--this.top];
}
//返回栈顶元素
function peek(){
  return this.dataStore[this.top-1];
}
//返回栈的最小值
function getMin(){
  let min = 0;
  for(let i=1;i<this.dataStore.length;i++){
    min = Math.min(this.dataStore[i],this.dataStore[i-1])
  }
  return min;
}

let stack = new MinStack();
stack.push(-2);
stack.push(0);
stack.push(-3);
console.log(stack.getMin());
stack.pop();
console.log(stack.peek());
console.log(stack.getMin())