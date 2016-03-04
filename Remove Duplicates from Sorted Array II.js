/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length < 3) {
        return nums.length;
    }
    
    var index = 0;
    var flag = 0;
    for (var i = 1; i < nums.length; i++) {
        if (nums[index] === nums[i]) {
            flag++;
            if (flag === 2) {
                nums.splice(i, 1);
                i--;
                flag--;
            }
        }
        else {
            flag = 0;
        }
        index = i;
    }
    return nums.length;
    
};