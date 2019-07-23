/**
 * Given a non-empty array of integers, every element appears twice except for one. Find that single one.

 * Note:

 * Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
 * 
 */

function sortNum(a,b){
  return a-b
}
 var singleOne = function(arr){
  arr = arr.sort(sortNum);
  for(let i=0; i<arr.length;i++){
    if(arr[i] === arr[i+1]){
       i++;
       continue;
      }else{
        if(arr[i+1] === arr[i+2]) return arr[i];
        return arr[i+1]
      }
  }
 }

 /**
  * 时间复杂度O(n),空间复杂度O(1)
  * 可以利用二进制异或的性质完成，将所有数字异或得到唯一出现的数字
  * 
  * 1.异或的性质，两个数字异或的结果 a^b是将a和b的二进制每一位进行运算，得出的数字。运算的逻辑是如果同一位的数字相同则为0，不同则为1
  * 2.异或的规律
  *   任何数和本身异或为0
  *   任何数和0异或为本身
  *   
  * bit运算
  */

var binarySingleNum = function(arr){
  let ret = 0;
  for(let index=0; index<arr.length;index++){
    let el = arr[index];
    ret = ret ^ el;
  }
  return ret
}

 console.log(singleOne([2,2,1]))
 console.log(singleOne([4,1,2,1,2]))
 console.log(singleOne([1,2,2,5,5,1,4,6,6,8,8,10,10]))

 console.log(binarySingleNum([2,2,1]))
 console.log(binarySingleNum([4,1,2,1,2]))
 console.log(binarySingleNum([1,2,2,5,5,1,4,6,6,8,8,10,10]))


 /**
  * 
  * 有一个n个元素的数组，除了两个数只出现一次外，
  * 其余元素都出现两次，让你找出这两个只出现一次的数分别是几，要求时间复杂度为O(n)且在开辟的内存空间固定(与n无关)
  */

