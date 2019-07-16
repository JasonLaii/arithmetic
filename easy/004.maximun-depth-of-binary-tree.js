/*
  Given a binary tree, find its maximum depth.

  The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

  Note: A leaf is a node with no children.

  Example:

  Given binary tree [3,9,20,null,null,15,7],

      3
    / \
    9  20
      /  \
    15   7
  return its depth = 3.
  
  */

function TreeNode(root,left,right){
  this.root = root;
  this.left = left;
  this.right = right;
}

var maxDepth = function(root){

  if(!root){
     return 0;
  }else{
    let left = maxDepth(root.left) + 1;
    let right = maxDepth(root.right) + 1;
    return left > right ? left : right
  }
}

let tnl = new TreeNode(9);
let tnr = new TreeNode(20, 15, 7);
let tn = new TreeNode(3, tnl, tnr);
let test = [3, 9, 20, null, null, 15, 7];

console.log(maxDepth(tn))