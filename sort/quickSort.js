/*
 * @Author: Jason
 * @Date: 2020-09-18 23:25:12
 * @Github: https://github.com/JasonLaii
 * @Description:
 * @LastEditTime: 2020-09-19 23:20:37
 */
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (!arr.length) return
  var i = left,
    j = right,
    pivot = arr[left]
  if (i > j) return
  while (i < j) {
    while (i < j && pivot < arr[j]) {
      j--
    }
    if (i < j && pivot > arr[j]) {
      arr[i++] = arr[j]
    }
    while (i < j && pivot > arr[i]) {
      i++
    }
    if (i < j && pivot < arr[i]) {
      arr[j--] = arr[i]
    }
  }

  arr[i] = pivot
  quickSort(arr, left, i - 1)
  quickSort(arr, i + 1, right)
  return arr
}
;(function () {
  console.log(quickSort([9, 8, 7, 6, 5, 4, 3, 2, 1]))
})()
