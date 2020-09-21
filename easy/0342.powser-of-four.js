/*
 * @Author: Jason
 * @Date: 2020-09-21 23:10:42
 * @Github: https://github.com/JasonLaii
 * @Description:
 * @LastEditTime: 2020-09-21 23:32:28
 */
/*

Given an integer (signed 32 bits), write a function to check whether it is a power of 4.

Example 1:

Input: 16
Output: true
Example 2:

Input: 5
Output: false
Follow up: Could you solve it without loops/recursion?

 */

function isPowerOfFour(integer) {
  if (typeof integer !== 'number') return false
  while (integer && integer % 4 === 0) {
    integer /= 4
  }
  return integer == 1
}

function isPowerOfFourII(integer) {
  if (typeof integer !== 'number') return false
  //  010 10 1  0  0 // 0101 0100
  //   64 16 4
  if (integer % 2 === 0 && (integer & parseInt(101010101010100, 2)) === integer)
    return true
  return false
}

;(function () {
  console.log(isPowerOfFour(64))
  console.log(isPowerOfFourII(256))
})()
