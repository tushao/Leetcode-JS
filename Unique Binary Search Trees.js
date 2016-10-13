/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    if(n === 0||n === 1) {
         return 1;
     }
    var count =[];
    count[0] = 1;
    count[1] = 1;
    
        for(let i=2;  i<= n; i++){
            count[i] = 0;
            for(let j=0; j<i; j++){
                count[i] += count[j] * count[i - j - 1];
            }
        }
        return count[n];
}