/**
 * 
 * Given n non-negative integers a1, a2, ..., an , 
 * where each represents a point at coordinate (i, ai). 
 * n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). 
 * Find two lines, which together with x-axis(轴) forms a container, such that the container contains the most water.

 * Note: You may not slant the container and n is at least 2.
 */

 /**
  * image in 0011.md
  * 
  * The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. 
  * In this case, the max area of water (blue section) the container can contain is 49.

  * Example:
  * Input: [1,8,6,2,5,4,8,3,7]
  * Output: 49
  */


  /**
   * 
   * @param {array} arr 
   * 1.通过头尾指针往中间遍历，x*y获取最大面积(x为左右指针的间距，y为高度)时间复杂度O(n)
   * 
   * 2.可以像获取最长回文字符串那样暴力破解，用两层循环，外层循环遍历数组，内层循环从前往后x*y，取最大面积，时间复杂度0(n^2)
   */
var maxWater = function(arr){

  let container = 0;
  let left = 0;
  let right = arr.length -1;
  let current;

    while(left < right){
      
      current = (right-left) * Math.min(arr[left],arr[right]);
      left > right ? right-- : left++;
      if(current > container){
        container = current;
      }
    }    

  return container;
}

console.log(maxWater([1,8,6,2,5,4,8,3,7]))
console.log(maxWater([1,2,3,4,5,2,6,8,7,9]))