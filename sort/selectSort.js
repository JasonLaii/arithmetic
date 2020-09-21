/*
 * @Author: Jason
 * @Date: 2020-09-20 12:43:11
 * @Github: https://github.com/JasonLaii
 * @Description:
 * @LastEditTime: 2020-09-21 23:49:12
 */
function selectSort(arr = []) {
  if (!arr.length) return
  let res = [],
    index = 0
  while (arr.length) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[index] > arr[i]) {
        index = i
      }
    }
    res.push(...arr.splice(index, 1))
  }
  return res
}
;(function () {
  // console.log(selectSort([9, 8, 7, 6, 5, 45, 4, 3, 2, 1]))
  console.log(selectSort([9, 10, 11, 0, 4, 65, 56, 2, 34, 98]))
  console.log([9, 10, 11, 0, 4, 65, 56, 2, 34, 98].sort((a, b) => a - b))
})()
