/**
 * 
 * Given a linked list, remove the n-th node from the end of list and return its head.

 * Example:

 * Given linked list: 1->2->3->4->5, and n = 2.

 * After removing the second node from the end, the linked list becomes 1->2->3->5. Note:

 * Given n will always be valid.

 * Follow up:

 * Could you do this in one pass?
 */

// function Node(val) {
//   this.val = val;
//   this.next = null;
// }
class Node{
  constructor(val){
    this.val = val;
  }
}

class LinkedList{
  constructor(){
    this.head =  null;
  }
  push(node){
    if(!this.head){
      this.head = node;
    }else{
      let current = this.head;
      while(current.next){
        current = current.next;
      }
      current.next = node;
    }
  }
  toString(){
    let str = this.head.val.toString();
    let current = this.head.next;
    while(current){
      str += ' -> ' + current.val.toString();
      current = current.next;
    }
    return str
  }
}

/**
 *
 * @param {Node} ll
 * @param {Number} n
 */
var removeNthFromEnd = function(ll, n) {
  let p = q = ll.head;
  let i = 0;

  while(q.next){
    if(i !== n){
      q = q.next;
      i++;
    }else{
      p = p.next;
      q = q.next;
    }
  }
  let remove = p.next;
  p.next = remove.next;
  console.log(p.next.val)
  remove = null;
  return ll.toString();
};

//1 2 3 4 5
const linkedlist = new LinkedList();
linkedlist.push(new Node(1))
linkedlist.push(new Node(2));
linkedlist.push(new Node(3));
linkedlist.push(new Node(4));
linkedlist.push(new Node(5));

console.log(removeNthFromEnd(linkedlist, 2));