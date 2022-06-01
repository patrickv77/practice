/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 */

/*
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = prices[0], profit = 0;
    for(let i = 1; i < prices.length; i++) {
        if(min > prices[i]) {
            min = prices[i];
        }else{
            if(min < prices[i]){
                if((prices[i]-min) > profit) {
                    profit = prices[i] - min;
                }
            }
        }
    }

    return profit;
};

console.log(maxProfit([7,6,5,4,3,2,1]));

/*
Runtime: 107 ms, faster than 55.33% of JavaScript online submissions for Best Time to Buy and Sell Stock.
Memory Usage: 51.9 MB, less than 32.10% of JavaScript online submissions for Best Time to Buy and Sell Stock.
*/