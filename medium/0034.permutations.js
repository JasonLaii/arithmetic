/**
 * Given a collection of distinct integers, return all possible permutations.

 * Example:

 * Input: [1,2,3]
 * Output:
 * [
 *   [1,2,3],
 *   [1,3,2],
 *   [2,1,3],
 *   [2,3,1],
 *   [3,1,2],
 *   [3,2,1]
 * ]
 */

var allPermutations = function(arr) {
  if(arr.length <= 1) return arr;
  let list = new Array();
  backtrack(list,new Array(),arr)

  return list;
};


var backtrack = function(list,tempList,arr){  
  if(tempList.length === arr.length) return list.push([...tempList]);

  for(let i=0;i<arr.length;i++){
    if(tempList.includes(arr[i])) continue;
    tempList.push(arr[i]);
    backtrack(list,tempList,arr);
    tempList.pop(arr[i]);
  }

}
allPermutations([1,2,3])