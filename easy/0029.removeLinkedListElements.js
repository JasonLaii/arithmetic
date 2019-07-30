/**
 * 
 * Remove all elements from a linked list of integers that have value val.

 * Example:

 * Input:  1->2->6->3->4->5->6, val = 6
 * Output: 1->2->3->4->5
 */

// 1 2 6 3 4 5 6
function Node(val) {
  this.val = val;
  this.next = null;
}
//插入数据到链表
let ll = new Node(1);
let arr = [1, 2, 6, 3, 4, 5, 6];
let cur = ll;
for (let i = 1; i < arr.length; i++) {
  cur.next = new Node(arr[i]);
  cur = cur.next;
}

/**
 *
 * @param {LinkedList} ll
 * @param {Number} val
 */
var removeVal = function(ll, val) {
  const dummyHead = {};
  let cur = dummyHead;
  cur.next = ll;

  while (cur.next) {
    let pre = cur;
    let next = pre.next;
    if (next.val === val) {
      if (!next.next) {
        delete pre.next;
      } else {
        pre.next = next.next;
        delete next;
      }
    } else {
      cur = cur.next;
    }
  }
  return dummyHead.next;
};

console.log(removeVal(ll, 6));
