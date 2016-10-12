/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    var can = [];
    can.length = nums.length;
    can[0] = 1;
    for (var a = 1; a < can.length; a++) {
        can[a] = 0;
    }
    
    for (var i = 1; i < nums.length; i++) {
        for (var j = 0; j < i; j++) {
            if (can[j] && j + nums[j] >= i) {
                can[i] = 1;
                break;
            }
        }
    }
    
    if (can[nums.length - 1] === 1) {
        return true;
    }
    else {
        return false;
    }
};