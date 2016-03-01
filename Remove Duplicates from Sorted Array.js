/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(!nums) {
        return;
    }
    
    var set = new Set();
    set.add(nums[0]);
    for (var i = 1; i < nums.length; i++) {
        if(!set.has(nums[i])) {
            set.add(nums[i]);
        }
        else {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.length;
};

