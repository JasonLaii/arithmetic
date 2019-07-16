//节点
class Node {
  constructor(root, left, right) {
    this.root = root;
    this.left = left;
    this.right = right;
  }
  show() {
    return this.root;
  }
}

//二叉查找树，又名二叉排序树，二叉搜索树
//若他的左子树不空，则左子树上所有的节点的值均小于他的根节点的值
//若他的右子树不空，则右子树上所有的节点的值均大于他的根节点的值
class BST {
  constructor() {
    this.root = null;
  }
  /*
    1.设根节点为当前节点
    2.如果待插入节点的数据小于当前节点，则设置新的当前节点为原节点的左节点；反之执行第4步
    3.如果当前节点的左节点为null,将新的节点插入到这个位置，退出循环；反之，执行下一次循环
    4.设新的当前节点为原节点的右节点
    5.如果当前节点的右节点为null,将新的节点插入到这个位置，退出循环，反之，执行下一次循环
    */

  insert(data) {
    let node = new Node(data, null, null);

    if (!this.root) {
      this.root = node;
    } else {
      let current = this.root;
      let parent;
      while (true) {
        parent = current;
        if (data < current.root) {
          current = current.left;
          if (!current) {
            parent.left = node;
            break;
          }
        } else {
          current = current.right;
          if (!current) {
            parent.right = node;
            break;
          }
        }
      }
    }
  }
  show() {
    return this.root;
  }
}

//前序遍历
//左-根-右
function preOrder(node) {
  if (node) {
    console.log(node.show());
    preOrder(node.left);
    preOrder(node.right);
  }
}

//中序遍历
//根-左-右
function inOrder(node) {
  if (node) {
    inOrder(node.left);
    console.log(node.show());
    inOrder(node.right);
  }
}

//后序遍历
//左-右-根
function postorder(node) {
  if (node) {
    postorder(node.left);
    postorder(node.right);
    console.log(node.show());
  }
}
let bst = new BST();
bst.insert(23);
bst.insert(45);
bst.insert(16);
bst.insert(37);
bst.insert(3);
bst.insert(99);
bst.insert(22);

console.log("Inorder traversal");
inOrder(bst.root);
console.log("Preorder traversal");
preOrder(bst.root);
console.log("Postorder traversal");
postorder(bst.root);
