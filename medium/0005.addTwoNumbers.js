/**
  * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

  * You may assume the two numbers do not contain any leading zero, except the number 0 itself.

  * Example

  * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
  * Output: 7 -> 0 -> 8
  * Explanation: 342 + 465 = 807.
  */

/**
 * Definition singly linked list
 * function ListNode(val){
 *  this.val = val;
 *  this.next = null;
 * }
 */


/**
 * @param {ListNode} ln1
 * @param {ListNode} ln2
 * @returns {ListNode}
 */
const ListNode = require("../data-structor/SinglyLinkedList").ListNode;
const LinkedList = require("../data-structor/SinglyLinkedList").LinkedList;
// 2 4 3
// 5 6 4
var addTwoNumbers = function(ln1, ln2) {
  let carried = 0;
  let head = new ListNode();

  let current = ln1.head;
  let current2 = ln2.head;
  let current3 = head;
  while (current.val) {
    if ((current.val + current2.val) / 10 >= 1) {
      current3.val = ((current.val + current2.val) % 10) + carried;
      carried = (current.val + current2.val) / 10;
    } else {
      current3.val = current.val + current2.val + carried;
      carried = 0;
    }
    //判断是否最后一个数
    if(current.next){
      current = current.next;
      current2 = current2.next;
      current3.next = new ListNode();
      console.log(current3.val);
      current3 = current3.next;
    }else{  //是的话跳出循环
      console.log(current3.val)
      break;
    }
  }

  return head;
};

let list1 = new LinkedList();
let list2 = new LinkedList();
let num1 = [2, 4, 3];
let num2 = [5, 6, 4];

for (let i in num1) {
  let value1 = num1[i];
  let vaule2 = num2[i];
  list1.add(new ListNode(value1));
  list2.add(new ListNode(vaule2));
}

addTwoNumbers(list1, list2);
