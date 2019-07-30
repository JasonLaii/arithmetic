/**
 * 
 * Given a set of candidate(候选) numbers (candidates) (without duplicates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

 * The same repeated number may be chosen from candidates unlimited number of times.

 * Note:

 * All numbers (including target) will be positive integers.
 * The solution set must not contain duplicate combinations.
 * Example 1:

 * Input: candidates = [2,3,6,7], target = 7,
 * A solution set is:
 * [
 *   [7],
 *   [2,2,3]
 * ]
 * Example 2:

 * Input: candidates = [2,3,5], target = 8,
 * A solution set is:
 * [
 *   [2,2,2,2],
 *   [2,3,3],
 *   [3,5]
 * ]
 */

// var sumSet = function(arr,target){
//   let set = new Array();
//   let mapper = {};
//   let sum = 0;
//   for(let i in arr){
//     const val = arr[i];
//     //可以整除或余数在数组中有
//     if(target % val === 0 || target % val === mapper[val]){
//       set.push([])
//     }
//     if(sum += val === target) set.push(arr)


//   }
// }


/**
 * 
 * @param {number[]} list 
 * @param {number[]} tempList 
 * @param {number[]} arr 
 * @param {number} remain 
 * @param {number} start 
 */
var backtrack = function(list,tempList,arr,remain,start){
  if(remain < 0) return;
  if(remain === 0 ) return list.push(tempList) 
  for(let i=start;i<arr.length;i++){
    tempList.push(arr[i]);
    backtrack(list,tempList,arr,remain-arr[i],i);
    tempList.pop();
  }
}

var sumSet = function(arr,target){
  const list = new Array();
  backtrack(list,new Array(),arr,target,0);
  return list;
}

console.log(sumSet([2,3,5],8))
