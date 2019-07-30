/**
 * Suppose an array sorted in ascending order is rotated at some pivot(轴) unknown to you beforehand.

 * (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

 * You are given a target value to search. If found in the array return its index, otherwise return -1.

 * You may assume no duplicate exists in the array.

 * Your algorithm's runtime complexity must be in the order of O(log n).

 * Example 1:

 * Input: nums = [4,5,6,7,0,1,2], target = 0  
 * Output: 4
 * Example 2:

 * Input: nums = [4,5,6,7,0,1,2], target = 3
 * Output: -1
 */

//4 5 6 7 0 1 2
var binarySearch = function(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = (start + end) >> 1;
    if (target === arr[mid]) return mid;

    //右无序
    if (arr[mid] > arr[end]) {
      if (target >= arr[start] && target < arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      //左无序
      if (target > arr[mid] && target <= arr[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return -1;
};

console.log(binarySearch([4, 5, 6, 7, 0, 1, 2], 0));
