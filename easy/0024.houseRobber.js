/*
 * @Author: Jason
 * @Date: 2019-07-29 11:11:30
 * @Github: https://github.com/JasonLaii
 * @Description:
 * @LastEditTime: 2020-09-16 00:15:43
 */
/**
 *
 * You are a professional robber planning to rob houses along a street.
 * Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

 * Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

 * Example 1:

 * Input: [1,2,3,1]
 * Output: 4
 * Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
             Total amount you can rob = 1 + 3 = 4.
 * Example 2:

 * Input: [2,7,9,3,1]
 * Output: 12
 * Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
 * Total amount you can rob = 2 + 9 + 1 = 12.
 */

var robMaxMoney = function (arr) {
  let current = 0
  let pre = 0
  for (let i = 0; i < arr.length; i++) {
    const temp = current
    current = Math.max(pre + arr[i], current)
    pre = temp
  }
  return current
}

var rob = function (arr) {
  const dp = new Array()
  dp[0] = 0
  dp[1] = 0
  for (let i = 2; i < arr.length + 2; i++) {
    // current = max(preSum,currentSum)
    dp[i] = Math.max(dp[i - 2] + arr[i - 2], dp[i - 1])
  }
  return dp[arr.length + 1]
}

// console.log(robMaxMoney([2,7,9,3,1]))
// console.log(robMaxMoney([1,2,3,1]))
// console.log(rob([2, 7, 9, 3, 1]));

// *************************************************************

function robII(arr) {
  if (!arr.length) return 0
  let pre = 0,
    cur = 0
  for (let i = 0; i < arr.length; i++) {
    let temp = cur
    cur = Math.max(pre + arr[i], cur)
    pre = temp
  }
  return cur
}

function robIII(arr) {
  const dp = [0, 0]
  for (let i = 2; i < arr.length; i++) {
    dp[i] = Math.max(dp[i - 2] + arr[i - 2], dp[i - 1])
  }
  return dp[arr.length + 1]
}

;(function () {
  console.log(robII([1, 2, 3, 1]))
  console.log(robII([2, 7, 9, 3, 1]))
  console.log(robII([2, 7, 3, 3, 9, 1]))
  // console.log(robMaxMoney([2, 7, 3, 3, 9, 1]))
})()
