/**
 * 
 * Given an integer n, return the number of trailing zeroes in n!.

 * Example 1:

 * Input: 3
 * Output: 0
 * Explanation: 3! = 6, no trailing zero.
 * Example 2:

 * Input: 5
 * Output: 1
 * Explanation: 5! = 120, one trailing zero.
 * Note: Your solution should be in logarithmic time complexity.
 */

// 1 2 3 4 5 6 7 8 9 10
// 2*5 = 10 => one tail zero 每有一个5，5*2 =10 即可获得一个尾零
// 5*5 =25  => 当num等于于25有 (num/5) +1 尾零  当num=50 有 (num/5) +2 尾零
//因此可以得到规律 count = (num/5) + (num/5)/5 + .... 

//cycle
var trailZero = function(num){
  let count = 0;
  while(num >= 5 ){
    count += Math.floor(num/5);
    num = Math.floor(num / 5);
  }
  return count;
}

//recursion
var trailZeroii = function(num){
  if(num >=5){
    return Math.floor(num / 5) + trailZeroii(Math.floor(num / 5)); 
  }else{
    return 0;
  }
}

console.log(trailZero(30))
console.log(trailZeroii(30))
console.log(trailZero(3))
