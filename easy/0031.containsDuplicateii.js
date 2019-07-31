/**
 * 
 * Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most k.

 * Example 1:

 * Input: nums = [1,2,3,1], k = 3
 * Output: true
 * Example 2:

 * Input: nums = [1,0,1,1], k = 1
 * Output: true
 * Example 3:

 * Input: nums = [1,2,3,1,2,3], k = 2
 * Output: false
 */

var containsDupliacate = function(arr, distinct) {
  if (arr.length < 2) return false;

  let mapper = {};
  for (let i = 0; i < arr.length; i++) {
    if (mapper[arr[i]] !== void 0 && i - mapper[arr[i]] <= distinct) {
      return true;
    } 
    mapper[arr[i]] = i;
  }
  return false;
};

console.log(containsDupliacate([1,2,3,1],3))
console.log(containsDupliacate([1,0,1,1],1))
console.log(containsDupliacate([1, 2, 3, 1, 2, 3], 2));
