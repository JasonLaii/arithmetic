/*
 * @Author: Jason
 * @Date: 2020-09-20 11:27:42
 * @Github: https://github.com/JasonLaii
 * @Description:
 * @LastEditTime: 2020-09-20 12:37:20
 */

function insert(arr) {
  if (!arr.length) return
  for (var i = 1; i < arr.length; i++) {
    var value = arr[i]
    var j = i - 1

    while (arr[j] > value) {
      if (j >= 1) {
        arr[j + 1] = arr[j--]
      } else {
        arr[j + 1] = arr[j]
        arr[j--] = value
      }
    }
    arr[j + 1] = value
  }
  return arr
}

;(function () {
  // console.log(insert([9, 8, 7, 6, 5, 45, 4, 3, 2, 1]))
  console.log(insert([9, 10, 11, 0, 4, 65, 56, 2, 34, 98]))
  console.log([9, 10, 11, 0, 4, 65, 56, 2, 34, 98].sort((a, b) => a - b))
})()
