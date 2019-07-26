/**
 * 
 * Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

 * You may assume that the array is non-empty and the majority element always exist in the array.

 * Example 1:

 * Input: [3,2,3]
 * Output: 3
 * Example 2:

 * Input: [2,2,1,1,1,2,2]
 * Output: 2
 */

var majorityElement = function(arr) {

  let times = Math.ceil(arr.length/2);
  let mapper = {};
  for(let i in arr){
    if(mapper[arr[i]]){
      mapper[arr[i]]++;
    }else{
      mapper[arr[i]] = 1; 
    }
  }
  for(let i in mapper){
    if(mapper[i] >= times){
      return i
    }
  }
};

var majority = function(arr){
  let majority = arr[0];
  let count = 1;

  for(let i=1;i<arr.length;i++){
    if(count === 0){
      majority = arr[i];
    }
    if(arr[i] === majority){
      count ++;
    }else{
      count --;
    }
  }
    return majority;
}

console.log(majorityElement([3,2,3]))
console.log(majorityElement([2,2,1,1,1,2,2]));

console.log(majority([3,2,3]))
console.log(majority([2,2,1,1,1,2,2]))