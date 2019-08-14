/*
 * @Author: Jason
 * @Date: 2019-08-06 14:38:45
 * @Github: https://github.com/JasonLaii
 * @Description: 
 * @LastEditTime: 2019-08-14 19:15:53
 */
/**
 * Given an integer (signed 32 bits), write a function to check whether it is a power of 4.

 * Example 1:

 * Input: 16
 * Output: true
 * Example 2:

 * Input: 5
 * Output: false
 * Follow up: Could you solve it without loops/recursion?
 */


var ispowerofFour = function(num){

  return num > 0 && (num & (num - 1)) === 0 && (num - 1)% 3 === 0 ;
  
}

console.log(ispowerofFour(16))
console.log(ispowerofFour(5))