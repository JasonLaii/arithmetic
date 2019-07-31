/**
 * 
 * Invert a binary tree.
 * Example:

 * Input:

 *      4
 *    /   \
 *   2     7
 *  / \   / \
 * 1   3 6   9
 * Output:

 *      4
 *    /   \
 *   7     2
 *  / \   / \
 * 9   6 3   1
 * Trivia:
 * This problem was inspired by this original tweet by Max Howell:

 * Google: 90% of our engineers use the software you wrote (Homebrew), but you can’t invert a binary tree on a whiteboard so f*** off.
 */

//recursion
var invertBinaryTree = function(node) {
  if (!node || !node.left || !node.right) return node;
    const temp = node.left;
    node.left = node.right;
    node.right = temp;
    invertBinaryTree(node.left);
    invertBinaryTree(node.right);
  return node;
};



//stack
var invertBTbystack = function(node){
  if(!node || !node.left || !node.right) return node;

  let stack = [node];
  let cur = null;
  while( ( cur = stack.shift() ) ){
    const left = cur.left;
    const right = cur.right;
    cur.left = right;
    cur.right = left;
    if(left){
      stack.push(left);
    }
    if(right){
      stack.push(right)
    }
  }
  return node;
}


function Node(root) {
  this.root = root;
  this.left = this.right = null;
}

let binaryTree = new Node(4);
binaryTree.left = new Node(2);
binaryTree.right = new Node(7);
binaryTree.left.left = new Node(1);
binaryTree.left.right = new Node(3);
binaryTree.right.left = new Node(6);
binaryTree.right.right = new Node(9);

invertBinaryTree(binaryTree);
invertBTbystack(binaryTree);