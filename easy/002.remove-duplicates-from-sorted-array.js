
    /*
    Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

    Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

    Example 1:

    Given nums = [1,1,2],

    Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.

    It doesn't matter what you leave beyond the returned length. Example 2:

    Given nums = [0,0,1,1,1,2,2,3,3,4],

    Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.

    It doesn't matter what values are set beyond the returned length. Clarification:

    Confused why the returned value is an integer but your answer is an array?

    Note that the input array is passed in by reference, which means modification to the input array will be known to the caller as well.

    Internally you can think of this:

    // nums is passed in by reference. (i.e., without making a copy)
    int len = removeDuplicates(nums);

    // any modification to nums in your function would be known by the caller.
    // using the length returned by your function, it prints the first len elements.
    for (int i = 0; i < len; i++) {
        print(nums[i]);
    }
    */


      let test = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4];
      let test2 = [0,1,2,33,33,55,55,66]
      let test3 = [0,0,0,1,1,1,2,2,2]
      let index = 0;
      //O(n^2)
      var removeDuplicated = function(array) {
        for (let i in array) {
          let val = array[i];
          index = i;
          index++;

          while (val == array[index]) {
            // console.log(array.splice(index, 1));
            array.splice(index,1)
            index++;
          }
        }
        console.log("数组长度为： " + array.length);
        return array;
      };

      // console.log(removeDuplicated(test2));

      //O(n)
      /*
      使用快慢指针来记录遍历的坐标。

      开始时这两个指针都指向第一个数字

      如果两个指针指的数字相同，则快指针向前走一步

      如果不同，则两个指针都向前走一步

      当快指针走完整个数组后，慢指针当前的坐标加1就是数组中不同数字的个数
      */
      var removeDuplicates = function(array){
        const size = array.length; 
        let slowP = 0;
        let fastP = 0;

        for( ; fastP<size; fastP++){
          if(array[fastP] !== array[slowP]){
            slowP++;
            array[slowP] = array[fastP];
          }
        }
        console.log(array)
        return slowP + 1;

      }
      console.log("数组长度为： "+removeDuplicates(test3))

