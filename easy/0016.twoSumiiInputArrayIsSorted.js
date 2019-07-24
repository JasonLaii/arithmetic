/**
 * Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

 * The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.

 * Note:

 * Your returned answers (both index1 and index2) are not zero-based.
 * You may assume that each input would have exactly one solution and you may not use the same element twice.
 * Example:

 * Input: numbers = [2,7,11,15], target = 9
 * Output: [1,2]
 * Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.
 * 
 */

var twoSum = function(arr, target) {
  let res = new Array();
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (j < arr.length) {
        if (arr[i] + arr[j] === target) {
          res.push(arr[i], arr[j]);
        }
      } else {
        break;
      }
    }
  }
  return res;
};

//void
var twoSumii = function(arr,target) {
  let visited = {};

  for(let i =0;i<arr.length;i++){
    const el = arr[i];
    if(visited[target - el] !== void 0){
      return [visited[target-el],i+1]
    }
    visited[el] = i + 1;
  }
  return [];
};

//return index
console.log(twoSumii([2,7,11,15],9))

//
console.log(twoSum([2, 7, 11, 15], 9));
