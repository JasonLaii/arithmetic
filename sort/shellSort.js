/*
 * @Author: Jason
 * @Date: 2020-09-25 23:37:15
 * @Github: https://github.com/JasonLaii
 * @Description:
 * @LastEditTime: 2020-09-25 23:50:10
 */

function shellSort(arr = []) {
  if (!arr.length) return []
  var hash = Math.floor(arr.length / 2)
  for (hash; hash > 0; hash = Math.floor(hash / 2)) {
    for (var i = 0; i < arr.length - hash; i++) {
      if (arr[i] > arr[i + hash]) {
        var temp = arr[i]
        arr[i] = arr[i + hash]
        arr[i + hash] = temp
      }
    }
  }
  return arr
}

;(function () {
  console.log(shellSort([9, 10, 11, 0, 4, 65, 56, 2, 34, 98]))
  console.log([9, 10, 11, 0, 4, 65, 56, 2, 34, 98].sort((a, b) => a - b))
})()
