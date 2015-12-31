/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var map = {}, num;

    while(!map[n]) {
        map[n] = true;

        num = 0
        while(n > 0) {
            num += (n%10) * (n%10);
            n = Math.floor(n/10);
        }
        if(num === 1) {
            return true;
        }
        n = num;
    }
    return false;
};