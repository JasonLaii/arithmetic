

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(node) {
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }
  showList(node) {
    console.log(node);
    if (node.next) {
      this.showList(node.next);
    }
  }
}

// let list1 = new LinkedList();
// let num1 = [2, 4, 3];
// for (let i in num1) {
//   let val = num1[i];
//   list1.add(new ListNode(val));
// }

// list1.showList(list1.head);

module.exports = {
  ListNode,
  LinkedList
}


