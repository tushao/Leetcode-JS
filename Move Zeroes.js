/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    for (var i = 0; i < nums.length; i++) {
        for (var j = 0; j < nums.length - 1 - i; j++) {
            if (nums[j] === 0) {
                temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
            }
        }
    }
};