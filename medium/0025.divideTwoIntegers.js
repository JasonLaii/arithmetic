/** 
 * Given two integers dividend(被除数) and divisor(除数), divide two integers without using multiplication(乘法), division(除法) and mod operator.

 * Return the quotient(商) after dividing dividend by divisor.

 * The integer division should truncate toward zero.

 * Example 1:

 * Input: dividend = 10, divisor = 3
 * Output: 3
 * Example 2:

 * Input: dividend = 7, divisor = -3
 * Output: -2
 * Note:

 * Both dividend and divisor will be 32-bit signed integers.
 * The divisor will never be 0.
 * Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 231 − 1 when the division result overflows.
 */

var getQuotient = function(dividend, divisor) {
  let res = 0;
  const isNegative = dividend > 0 !== divisor > 0;

  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);
  while (dividend >= divisor) {
    dividend = dividend - divisor;
    res++;
  }
  if (isNegative) {
    return 0 - res;
  } else {
    return res;
  }
};
console.log(getQuotient(7, 3));
console.log(getQuotient(7, -3));
console.log(getQuotient(-7, 3));
console.log(getQuotient(-7, -3));


//二分法
var divide = function(dividend,divisor){
  if(divisor ===1 ) return dividend;
  const isNegative = dividend > 0 !== divisor > 0;
  const MAX_INTERGER = Math.pow(2,31);
  const res = helper(Math.abs(dividend), Math.abs(divisor));

  //overflow
  if(res > MAX_INTERGER -1 || res < 0 - MAX_INTERGER){
    return MAX_INTERGER - 1;
  }
  return isNegative ? 0-res : res;
}

var helper = function(dividend,divisor){
  if(dividend <=0) return 0;
  if(dividend < divisor) return 0;
  if(divisor === 1) return dividend;

  let mul = divisor + divisor;
  let count = 1;

  while(dividend - mul >0){
    mul += mul;
    count += count;
  }
  const last = dividend -Math.floor(mul / 2);

  return count + helper(last,divisor);

}
console.log(divide(7, 3));
console.log(divide(7, -3));
console.log(getQuotient(-7, 3));
console.log(getQuotient(-7, -3));