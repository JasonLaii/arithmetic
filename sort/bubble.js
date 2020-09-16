/*
 * @Author: Jason
 * @Date: 2020-09-16 23:44:06
 * @Github: https://github.com/JasonLaii
 * @Description:
 * @LastEditTime: 2020-09-16 23:55:56
 */
function bubble(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] >= arr[j + 1]) {
        var temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      } else {
        continue
      }
    }
  }
  return arr
}

;(function () {
  console.log(bubble([9, 8, 7, 6, 5, 4, 3, 2, 1]))
  console.log(bubble([4, 3, 2, 1]))
})()
