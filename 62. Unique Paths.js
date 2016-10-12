/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    if (m ===0 || n === 0) {
        return 0;
    }
    
    var sum = [];
    for (var i = 0; i < m; i++) {
        sum[i] = [];
        for (var j = 0; j < n; j++) {
            sum[i][j] = 0;
        }
    }
    
    for (i = 0; i < m; i++) {
        sum [i][0] = 1;
    }
    for (j = 0; j < n; j++) {
        sum[0][j] = 1;
    }
    
    for (i = 1; i < m; i++) {
        for (j = 1; j < n; j++) {
            sum[i][j] = sum[i-1][j] + sum[i][j-1];
        }
    }
    return sum[m-1][n-1];
};