/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices === null || prices.length === 0) {
        return 0;
    }
    
    var min = Number.MAX_VALUE;
    var profit = 0;
    for (let i = 0; i < prices.length; i++) {
        min = prices[i] < min ? prices[i] : min;
        profit = (prices[i] - min) > profit ? prices[i]-min : profit;
    }
    return profit;
};