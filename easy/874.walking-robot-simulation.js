/*
 * @Author: Jason
 * @Date: 2020-09-09 22:14:34
 * @Github: https://github.com/JasonLaii
 * @Description:
 * @LastEditTime: 2020-09-09 23:46:08
 */
/*
机器人在一个无限大小的网格上行走，从点 (0, 0) 处开始出发，面向北方。该机器人可以接收以下三种类型的命令：

-2：向左转 90 度
-1：向右转 90 度
1 <= x <= 9：向前移动 x 个单位长度
在网格上有一些格子被视为障碍物。

第 i 个障碍物位于网格点  (obstacles[i][0], obstacles[i][1])

如果机器人试图走到障碍物上方，那么它将停留在障碍物的前一个网格方块上，但仍然可以继续该路线的其余部分。

返回从原点到机器人的最大欧式距离的平方。



示例 1：

输入: commands = [4,-1,3], obstacles = []
输出: 25
解释: 机器人将会到达 (3, 4)
示例 2：

输入: commands = [4,-1,4,-2,4], obstacles = [[2,4]]
输出: 65
解释: 机器人在左转走到 (1, 8) 之前将被困在 (1, 4) 处


提示：

0 <= commands.length <= 10000
0 <= obstacles.length <= 10000
-30000 <= obstacle[i][0] <= 30000
-30000 <= obstacle[i][1] <= 30000
答案保证小于 2 ^ 31


*/

function robotWalk(commands, obstacle) {
  var pos = [0, 0]
  var deg = 90
  var ans = 0
  commands.forEach((command) => {
    // 右转 90'
    if (command === -1) {
      deg = (deg + 270) % 360
    } else if (command === -2) {
      // 左转 90'
      deg = (deg + 90) % 360
    }
    switch (deg) {
      // east
      case 0:
        var i = 0
        while (i < command && helper(pos[0] + 1, pos[1], obstacle)) {
          pos[0] += 1
          i++
        }
        break
      // north
      case 90:
        var i = 0
        while (i < command && helper(pos[0], pos[1] + 1, obstacle)) {
          pos[1] += 1
          i++
        }
        break
      // west
      case 180:
        var i = 0
        while (i < command && helper(pos[0] - 1, pos[1], obstacle)) {
          pos[0] -= 1
          i++
        }
        break
      // south
      case 270:
        var i = 0
        while (i < command && helper(pos[0], pos[1] - 1, obstacle)) {
          pos[1] -= 1
          i++
        }
        break
    }
    // ans = Math.max(ans, pos[0] ** 2, pos[1] ** 2)
  })
  console.log('pos 0 ', pos[0], 'pos1', pos[1])
  return pos[0] ** 2 + pos[1] ** 2
}

function helper(x, y, obstacle) {
  let cur = `[${x},${y}]`
  for (let i of obstacle) {
    return cur === `[${i.toString()}]` ? false : true
  }
  return true
}

console.log(robotWalk([4, -1, 4, -2, 4], [[2, 4]]))
console.log(robotWalk([4, -1, 3], []))
