/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var y, count = 1;
    if (n < 2) {
        return n;
    }
    else {
        var store = [];
        store[0] = 1;
        store[1] = 2;
        for(var i = 2; i < n; ++i)
        store[i] = store[i-1] + store[i-2];

    return store[n-1];
    }
};