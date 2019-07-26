/**
 * 
 * Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

 * Example:

 * Input:
 * [
 *   1->4->5,
 *   1->3->4,
 *   2->6
 * ]
 * Output: 1->1->2->3->4->4->5->6
 */



/**
 * function LinkedList(){
 *  this.next = null;
 * } 
 */
/**
 * 
 * @param {LinkedList} l1 
 * @param {LinkedList} l2 
 */
var mergeTwoList = function(l1,l2){
  l1 = l1.head;
  l2 = l2.head;
  let dummyHead = new LinkedList();
  let current = dummyHead;
  while( l1 !== null && l2 !== null){
    if(l1.val < l2.val){
      current.next =l1;
      current = current.next;
      l1 = l1.next;
    }else{
      current.next = l2;
      current = current.next;
      l2 = l2.next;
    }
  }
  if( !l1 ){
    current.next = l2;
  }else{
    current.next = l1;
  }
  return dummyHead.next;
}

/**
 * 
 * @param {LinkedListArray} arr 
 */
var mergekList = function(arr){

  if( !arr ) return  null;
  if( arr.length === 1) return arr[0];
  if( arr.length === 2){
    return mergeTwoList(arr[0],arr[1]);
  }
  // >> 右移运算符
  let mid = arr.length >> 1;
  let left = new Array();
  let right = new Array();
  for(let i =0;i<mid;i++){
    left[i] = arr[i]
  }
  for(let i=mid,j=0;i<arr.length;i++,j++){
    right[j] = arr[i];
  }
  return mergeTwoList(mergekList(left),mergekList(right))
}
