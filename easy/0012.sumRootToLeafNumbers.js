/**
 * 
 * Given a binary tree containing digits from 0-9 only, each root-to-leaf path could represent a number.

 * An example is the root-to-leaf path 1->2->3 which represents the number 123.

 * Find the total sum of all root-to-leaf numbers.

 * Note: A leaf is a node with no children.

 * Example:

 * Input: [1,2,3]
 *    1
 *   / \
 *  2   3
 * Output: 25
 * Explanation:
 * The root-to-leaf path 1->2 represents the number 12.
 * The root-to-leaf path 1->3 represents the number 13.
 * Therefore, sum = 12 + 13 = 25.
 * Example 2:

 * Input: [4,9,0,5,1]
 *     4
 *    / \
 *   9   0
 *  / \
 * 5   1
 * Output: 1026
 * Explanation:
 * The root-to-leaf path 4->9->5 represents the number 495.
 * The root-to-leaf path 4->9->1 represents the number 491.
 * The root-to-leaf path 4->0 represents the number 40.
 * Therefore, sum = 495 + 491 + 40 = 1026.
 */


function TreeNode(root,left,right){
  this.root = root;
  this.left = left;
  this.right = right;
}

function recurison(root,cur){
  if(!root) return 0;
  const next = root.root + cur*10;

  if( !root.left && !root.right) return next;
  const l = recurison(root.left,next);
  const r =recurison(root.right,next);
  return l + r;
}
/**
 * @description: 
 * @param {TreeNode} root 
 * @return: 
 */
var sumRootToLeafNums = function(root) {
  return recurison(root,0)

};

//1 2 3
//4 9 0 5 1

let tree = new TreeNode(1,new TreeNode(2),new TreeNode(3))
let tree2 = new TreeNode(4,new TreeNode(9,new TreeNode(5),new TreeNode(1)),new TreeNode(0));
console.log(sumRootToLeafNums(tree))
console.log(sumRootToLeafNums(tree2))
