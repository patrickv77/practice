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
    var profit = 0;
    var min = prices[0];

    for(var i = 0; i < prices.length-1; i++){
        if(prices[i] < prices[i+1] && prices[i] <= min){
            min = prices[i];
            for(var j = i+1; j < prices.length; j++) {
                var temp = prices[j] - prices[i];
                if(temp > profit){
                    profit = temp;
                }
            }
        }
    }
    return profit;
};

/*
Runtime: 116 ms, faster than 43.77% of JavaScript online submissions for Best Time to Buy and Sell Stock.
Memory Usage: 51.4 MB, less than 93.99% of JavaScript online submissions for Best Time to Buy and Sell Stock.
 */