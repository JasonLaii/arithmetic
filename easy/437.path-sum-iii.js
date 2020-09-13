/*
 * @Author: Jason
 * @Date: 2020-09-09 23:48:02
 * @Github: https://github.com/JasonLaii
 * @Description:
 * @LastEditTime: 2020-09-13 11:23:34
 */
/*

You are given a binary tree in which each node contains an integer value.

Find the number of paths that sum to a given value.

The path does not need to start or end at the root or a leaf, but it must go downwards (traveling only from parent nodes to child nodes).

The tree has no more than 1,000 nodes and the values are in the range -1,000,000 to 1,000,000.

Example:

root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8

      10
     /  \
    5   -3
   / \    \
  3   2   11
 / \   \
3  -2   1

Return 3. The paths that sum to 8 are:

1.  5 -> 3
2.  5 -> 2 -> 1
3. -3 -> 11

*/

// [10,5,-3,3,2,null,11,3,-2,null,1]

function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

/**
 * @desc
 * @author jason
 * @param {TreeNode} root
 * @param {int} sum
 * @date 2020-09-10 23:17:20
 * @return
 */
function pathSum(root, sum) {
  if (!root) return
  const self = helper(root, sum)
  const left = helper(root.left, sum)
  const right = helper(root.right, sum)

  return self + left + right
}

function helper(root, sum) {
  if (!root) return 0
  const l = helper(root.left, sum - root.val)
  const r = helper(root.right, sum - root.val)

  return l + r + (root.val === sum ? 1 : 0)
}

function CreateBinaryTree() {}

CreateBinaryTree.prototype = {
  createTree(arr) {
    if (!arr || !arr.length) return null
    let head = new TreeNode(arr.shift())
    var queue = [head]
    var helper = function (val, queue, direction = 'left') {
      if (val) {
        node[direction] = new TreeNode(val)
        queue.push(node[direction])
      }
      if (!arr.length) return false
      return true
    }
    while (queue.length > 0) {
      if (!arr.length) break
      var node = queue.shift()
      var leftVal = arr.shift()
      if (!helper(leftVal, queue, 'left')) break
      var rightVal = arr.shift()
      if (!helper(rightVal, queue, 'right')) break
    }
    return head
  },
}
;(function () {
  let arr = [10, 5, -3, 3, 2, null, 11, 3, -2, null, 1]
  let tree = new CreateBinaryTree()
  let root = tree.createTree(arr)
  let path = pathSum(root, 8)
  console.log('path', path)
})()
