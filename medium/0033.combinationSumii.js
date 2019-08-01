/**
 * Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

 * Each number in candidates may only be used once in the combination.

 * Note:

 * All numbers (including target) will be positive integers.
 * The solution set must not contain duplicate combinations.
 * Example 1:

 * Input: candidates = [10,1,2,7,6,1,5], target = 8,
 * A solution set is:
 * [
 *   [1, 7],
 *   [1, 2, 5],
 *   [2, 6],
 *   [1, 1, 6]
 * ]
 * Example 2:

 * Input: candidates = [2,5,2,1,2], target = 5,
 * A solution set is:
 * [
 *   [1,2,2],
 *   [5]
 * ]
 */

//[10,1,2,7,6,1,5]  t=8
//[2,5,2,1,2] t=5
var combinationSum = function(arr,target){
  const list = new Array();
  backtrack(list,new Array(),arr.sort((a,b)=>a-b),target,0);
  return list;
}

var backtrack = function(list,templist,arr,remain,start){
  if( remain < 0 ) return;
  if( remain === 0 ) return list.push([...templist]);

  for(let i = start ;i<arr.length;i++){
    if( arr[i] === arr[i-1] && i > start ) continue;
    templist.push(arr[i]);
    backtrack(list,templist,arr,remain - arr[i],i+1);
    templist.pop();
  }
}

console.log(combinationSum([10,1,2,7,6,1,5],8))
console.log(combinationSum([2, 5, 2, 1, 2],5));