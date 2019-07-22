/**
 * 
 * Say you have an array for which the ith element is the price of a given stock on day i.

 * If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

 * Note that you cannot sell a stock before you buy one.

 * Example 1:

 * Input: [7,1,5,3,6,4]
 * Output: 5
 * Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
 * Not 7-1 = 6, as selling price needs to be larger than buying price.
 * Example 2:

 * Input: [7,6,4,3,1]
 * Output: 0
 * Explanation: In this case, no transaction is done, i.e. max profit = 0.

 */

var bestTimeToStock = function(arr) {
  let res = 0;
  for (let i in arr) {
    let buy = arr[i];
    for (let j = i; j < arr.length; j++) {
      let sell = arr[j];
      if (buy < sell && res < sell - buy) {
        res = sell - buy;
      }
    }
  }
  return res;
};
// 7 1 5 3 6 4
var maxProfit = function(arr) {
  let maxProfit = 0;
  let min = arr[0];
  for (let i =0; i < arr.length;i++) {
    let buy = arr[i];
    let sell = arr[i+1];
    if(buy < sell){
      maxProfit = Math.max(maxProfit, arr[i+1] - min)
    }else{
      min = Math.min(min, sell)
    }
  }
  return maxProfit
};


console.log(bestTimeToStock([7, 1, 5, 3, 6, 4]));
console.log(bestTimeToStock([7, 6, 4, 3, 1]));

console.log(maxProfit([7,1,5,3,6,4]))
console.log(maxProfit([7,6,4,3,1]))

// maxProfit([7, 1, 5, 3, 6, 4]);
// maxProfit([7, 6, 4, 3, 1]);