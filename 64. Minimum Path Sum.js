/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    if (grid === null || grid.length === 0 || grid[0].length === 0) {
        return 0;
    }
    
    var m = grid.length;
    var n = grid[0].length;
    var sum = [];
    for (var i = 0; i < m; i++) {
        sum[i] = [];
        for (var j = 0; j < n; j++) {
            sum[i][j] = 0;
        }
    }
    
    sum[0][0] = grid[0][0];
    for (i = 1; i < m; i++) {
        sum[i][0] = sum[i-1][0] + grid[i][0];
    }
     for (i = 1; i < n; i++) {
        sum[0][i] = sum[0][i-1] + grid[0][i];
    }
    for(i = 1; i<m; i++) {
        for(j = 1; j < n; j++) {
            sum[i][j] = Math.min(sum[i-1][j], sum[i][j-1]) + grid[i][j];
        }
    }
    
    return sum[m-1][n-1];
    
};