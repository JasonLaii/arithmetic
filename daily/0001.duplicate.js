/**
 *
 * 完成duplicate函数，使之功能复合duplicate([1,2,3,4,5]) //[1,2,3,4,5,1,2,3,4,5]
 */

var duplicate = function(arr) {
  let size = arr.length
  for (let i=0;i<size;i++) {
    arr.push(arr[i]);
  }
  return arr;
};

console.log(duplicate([1,2,3,4,5]))

/**
 * 完成duplicate函数，使之功能复合
 * duplicate([1,2,3,4,5]) //[1,1,2,2,3,3,4,4,5,5]
 * 
 */ 

 function sortNumber(a,b){
   return a-b
 }

 var duplicateii = function(arr){
  return arr.concat(arr).sort(sortNumber)
 }

 console.log(duplicateii([1,2,3,4,5]))
 console.log(duplicateii([6,7,8,9,10]))