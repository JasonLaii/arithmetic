/**
 * 
 * Given a linked list, swap every two adjacent nodes and return its head.

 * You may not modify the values in the list's nodes, only nodes itself may be changed.

 * Example:

 * Given 1->2->3->4, you should return the list as 2->1->4->3.
 */

var swap = function(n1, n2) {
  let temp = n2.next;
  n2.next = n1;
  n1.next = temp;
};

/**
 *
 * @param {linkedlink} list
 */
var swapPairs = function(list) {
  let dummyHead = {};
  let current = dummyHead;
  current.next = list;
  while (current && current.next && current.next.next) {
    let pre = current.next;
    let next = pre.next;

    pre.next = next.next;
    next.next = pre;

    current.next = next;
    current = current.next.next;

  }
  console.log(dummyHead.next);
  return dummyHead.next;
};

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
let ll = new Node(1);
ll.next = new Node(2);
ll.next.next = new Node(3);
ll.next.next.next = new Node(4);

console.log(swapPairs(ll));
