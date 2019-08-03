/**
 * Given a collection of numbers that might contain duplicates, return all possible unique permutations.

 * Example:

 * Input: [1,1,2]
 * Output:
 * [
 *   [1,1,2],
 *   [1,2,1],
 *   [2,1,1]
 * ]
 */

//[1,1,2]
var permutationsii = function(arr){

  const list = new Array();
  backtrack(list,[],arr,[]);
  
  return list;

}

var backtrack = function(list,tempList,arr,visited){

  if(tempList.length === arr.length) return list.push([...tempList]);

  for(let i=0;i<arr.length;i++){

    if(visited[i]) continue;

    if(i > 0 && arr[i] === arr[i-1] && visited[i-1]) continue;

    tempList.push(arr[i]);
    visited[i] = true;
    backtrack(list,tempList,arr,visited)
    visited[i] = false;
    tempList.pop(arr[i]);
  }
}

permutationsii([1,1,2])

// var a = Object.create(Array)
// console.log(a instanceof Object )
// console.log(a instanceof Array)

// function link(o1,o2){

//   function F(){};
//   F.prototype = o2;
//   console.log(o1 instanceof o2);
// }

// link(Array,Object)
// link(Object,Array)

// console.log(Object.prototype.isPrototypeOf(Array))
