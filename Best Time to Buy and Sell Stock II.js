/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices === null || prices.length <= 1) {
        return 0;
    }
    var profit = 0;
    for (var i = 0; i < prices.length - 1; i++) {
        var diff = prices[i+1] - prices[i];
        if (diff > 0) {
            profit += diff;
        }
    }
    return profit;
};