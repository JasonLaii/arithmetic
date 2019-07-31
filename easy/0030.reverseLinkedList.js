/**
 * 
 * Reverse a singly linked list.

 * Example:

 * Input: 1->2->3->4->5->NULL Output: 5->4->3->2->1->NULL Follow up:

 * A linked list can be reversed either iteratively(迭代) or recursively. Could you implement both?
 */

var reverseLinkedList = function(ll){
  if(!ll || !ll.next) return ll;

  let cur = ll;
  let pre = null;
  while(cur){
    let next = cur.next;

    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
}

function Node(val){
  this.val = val;
  this.next = null;
}

let ll = new Node(1);
ll.next = new Node(2);
ll.next.next = new Node(3);
ll.next.next.next = new Node(4);
ll.next.next.next.next = new Node(5);

console.log(reverseLinkedList(ll));
