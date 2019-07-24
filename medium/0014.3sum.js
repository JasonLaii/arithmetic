/**
 * Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

 * Note:

 * The solution set must not contain duplicate triplets.

 * Example:

 * Given array nums = [-1, 0, 1, 2, -1, -4],

 * A solution set is:
 * [
 *   [-1, 0, 1],
 *   [-1, -1, 2]
 * ]
 */

//duplicate
var sumZero = function(arr) {
  // console.time()
  let res = new Array();
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[j] + arr[j + 1] === -arr[i]) {
        res.push([arr[i], arr[j], arr[j + 1]]);
      } else {
        continue;
      }
    }
  }
  // console.timeEnd()
  return res.toString();
};

//non-duplicate
var sumzo = function(arr) {
  // console.time();
  let res = new Array();
  if (arr.length < 3) return [];
  arr = arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -arr[i - 2] || arr[i] === arr[i - 1]) continue;

    for (let j = 1; j < arr.length; j++) {
      if (arr[j] + arr[j + 1] === -arr[i]) {
        res.push([arr[i], arr[j], arr[j + 1]]);
      }
    }
  }
  // console.timeEnd()
  return res.toString();
};

console.log(sumZero([-1, 0, 1, 2, -1, -4]));
console.log(sumzo([-1, 0, 1, 2, -1, -4]));
