/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    if (triangle === null || triangle.length === 0) {
            return -1;
        }
    if (triangle[0] === null || triangle[0].length === 0) {
            return -1;
        }
    
    var n = triangle.length;
    var f = [];
    for (var i = 0; i < n; i++) {
        f[i] = [];
        for (var j = 0; j < n; j++) {
            f[i][j] = 0;
        }
    }
    
    f[0][0] = triangle[0][0];
    for (i = 1; i < n; i++) {
        f[i][0] = f[i-1][0] + triangle[i][0];
        f[i][i] = f[i-1][i-1] + triangle[i][i];
    }
    
    for (i = 1; i < n; i++) {
        for (j = 1; j < i; j++) {
            f[i][j] = Math.min(f[i-1][j], f[i-1][j-1]) + triangle[i][j];
        }
    }
    
    var best = f[n-1][0];
    for (i = 1; i < n; i++) {
        best = Math.min(best, f[n-1][i]);
    }
    
    return best;
    
};

//O(n)
var minimumTotal = function(triangle) {
   let min = triangle[triangle.length-1];
    for(let i=triangle.length-2; i>=0; i--) {
        let cur = triangle[i];
        for (var j = 0; j < cur.length; j++) {
            min[j] = Math.min(min[j+1], min[j]) + cur[j];
        }
    }
    return min[0];
    
};
