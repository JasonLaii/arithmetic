/*
 * @Author: Jason
 * @Date: 2020-09-24 21:07:51
 * @Github: https://github.com/JasonLaii
 * @Description:
 * @LastEditTime: 2020-09-25 23:52:49
 */
/*
给定不同面额的硬币和一个总金额。写出函数来计算可以凑成总金额的硬币组合数。假设每一种面额的硬币有无限个。
输入：amount = 5, coins = [1,2,5]
输出： 4
解释： 有四种方式可以凑成总金额：
5 = 5
5 = 2 + 2 + 1
5 = 2 + 1 + 1 + 1
5 = 1 + 1 + 1 + 1 + 1
*/

function getCoins(coins = [], amount = 0) {
  if (!coins.length || !amount) return 0
  let count = 0
  for (let i = 0; i < coins.length; i++) {
    count += backtracks(coins, i, coins[i], amount)
  }
  return count
}

function backtracks(arr, index, acc, target) {
  if (target === acc) return 1
  if (target - arr[index] === acc) return 1

  var count = 0

  while (target - arr[index] >= acc) {
    count += backtracks(arr, index, acc + arr[index++], target)
  }

  return count
}

// TODO - dynamic planing .
// function dp(coins = [], amount = 0) {
//   if (!coins.length || !amount) return 0
//   var dp = []
//   dp[0] = 1
//   for (var i = 0; i < coins.length; i++) {
//     for (var index = 1; index <= amount; index++) {
//       if (dp[index] === void 0) dp[index] = 0
//       if (index >= coins[i]) {
//         dp[index] = dp[index] + dp[index - coins[i]]
//       }
//     }
//   }
//   if (dp[amount] === void 0) return 0
//   return dp[amount]
// }

;(function () {
  // console.log(getCoins([1, 2, 5], 5))
  // console.log(getCoins([1, 2, 5], 6))

  // console.log(getCoins([1, 2, 5], 7))
  // console.log(getCoins([1, 2, 5], 10))
  console.log(dp([1, 2, 5], 5))
  console.log(dp([2, 5], 5))
})()
