/*
 * @Author: Jason
 * @Date: 2019-08-14 19:16:22
 * @Github: https://github.com/JasonLaii
 * @Description:
 * @LastEditTime: 2019-08-14 19:30:02
 */
/**
 * Given two arrays, write a function to compute their intersection(交集).

 * Example 1:

 * Input: nums1 = [1,2,2,1], nums2 = [2,2]
 * Output: [2]
 * Example 2:

 * Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * Output: [9,4]
 * Note:

 * Each element in the result must be unique.
 * The result can be in any order.
 */

 
var intersection = function(a1, a2) {
  
  let visited = {};
  let res = [];

  for(let i of a1){
    visited[i] = true;
  }
  
  for(let j of a2){
    if(visited[j]){
      visited[j] = false;
      res.push(j);
    }
  }
  return res;
};

console.log(intersection([4,9,5],[9,4,9,8,4]))
console.log(intersection([1,2,2,1],[2,2]))
