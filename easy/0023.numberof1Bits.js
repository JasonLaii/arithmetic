/**
 * 
 * Write a function that takes an unsigned integer and return the number of '1' bits it has (also known as the Hamming weight).

 * Example 1:

 * Input: 00000000000000000000000000001011
 * Output: 3
 * Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.
 * Example 2:

 * Input: 00000000000000000000000010000000
 * Output: 1
 * Explanation: The input binary string 00000000000000000000000010000000 has a total of one '1' bit.
 * Example 3:

 * Input: 11111111111111111111111111111101
 * Output: 31
 * Explanation: The input binary string 11111111111111111111111111111101 has a total of thirty one '1' bits.
 
 * Note:

 * Note that in some languages such as Java, there is no unsigned integer type. In this case, the input will be given as signed integer type and should not affect your implementation, as the internal binary representation of the integer is the same whether it is signed or unsigned.
 * In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 3 above the input represents the signed integer -3.
 */

/**
 * 
 * num与1进行&位运算，&位运算同为1则为1， 不同则为0
 * num逐位右移
 * 重复32次，直至遍历完32位bit
 * @param {Number} num 
 */
var number = function(num){
  let res = 0;
  while(num !== 0){
    if(num & 1 ===1){
      res++;
    }
    num = num >>> 1;
  }
  return res
}

console.log(number(11))