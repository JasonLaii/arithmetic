/*
 * @Author: Jason
 * @Date: 2020-09-18 23:25:12
 * @Github: https://github.com/JasonLaii
 * @Description:
 * @LastEditTime: 2020-09-20 00:14:59
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

function quickSortII(arr) {
  if (arr.length <= 1) return arr
  var pivotIndex = Math.floor(arr.length / 2),
    pivot = arr.splice(pivotIndex, 1)[0],
    left = [],
    right = []
  arr.forEach((el) => {
    el < pivot ? left.push(el) : right.push(el)
  })
  // 没用var声明，leftArr往上取
  var leftArr = quickSortII(left)
  if (pivot === 2) {
    console.log('hh', leftArr)
  }
  var rightArr = quickSortII(right)
  return [...leftArr, pivot, ...rightArr]
}

;(function () {
  console.log(quickSortII([9, 8, 7, 6, 5, 4, 3, 2, 1]))
  // console.log(quickSort([9, 8, 7, 6, 5, 4, 3, 2, 1]))
})()
