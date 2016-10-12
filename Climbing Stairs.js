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

//DP
var climbStairs = function(n) {
    var s1 = 1;
    var s2 = 2;
    var cal = 0;
    
    if (n < 1) {
        return 0;
    }
    else if (n < 2) {
        return 1;
    }
    else if (n < 3) {
        return 2;
    }
    else {
        for (var i = 0; i < n-2; i++) {
            cal = s1 + s2;
            s1 = s2;
            s2 = cal;
        }
        return cal;
    }
};