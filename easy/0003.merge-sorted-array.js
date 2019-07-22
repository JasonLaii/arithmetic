/*
    Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

    Note:

    The number of elements initialized in nums1 and nums2 are m and n respectively.
    You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
    Example:

    Input:
    nums1 = [1,2,3,0,0,0], m = 3
    nums2 = [2,5,6],       n = 3

    Output: [1,2,2,3,5,6]
    */

let arr1 = [1, 2, 3, 0, 0, 0];
let arr2 = [2, 5, 6];
let current = arr1.length - 1;
let m = 3;
let n = 3;
var merge = function(arr1, arr2) {
  while (current >= 0) {
    if (n === 0) return arr1;

    if (m < 1) {
      arr1[current--] = arr2[--n];
      continue;
    }

    if (n < 1) {
      arr1[current--] = arr1[--m];
      continue;
    }

    //将大数的放在后面
    if (arr1[m - 1] > arr2[n - 1]) {
      arr1[current--] = arr1[--m];
    } else {
      arr1[current--] = arr2[--n];
    }
  }

  // return arr1;
};

console.log(merge(arr1, arr2));
