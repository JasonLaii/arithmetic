/**
 * Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

 * Example:

 * Input: [0,1,0,3,12]
 * Output: [1,3,12,0,0]
 * Note:

 * You must do this in-place without making a copy of the array.
 * Minimize the total number of operations.
 */

var move = function(arr){
  let end = arr.length - 1;
  while(arr[end] === 0 ){
    end--;
  }
  for(let i = 0;i<arr.length;i++){
    if(arr[i] === 0) {
      arr[i] = arr[end];
      arr[end] = 0;      
    }
  }
  return arr
}
console.log(move([0,1,3,0,12]))