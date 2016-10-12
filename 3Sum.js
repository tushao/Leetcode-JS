/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var sets = [];
    if (nums.length < 3 || nums === null) return [];
    nums = nums.sort(function(a, b){return a-b});
    
    for (var i=0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i-1]) continue;
        var target = 0 - nums[i];
        var j = i+1;
        var k = nums.length - 1;
        while (j < k) {
            if (nums[j] + nums[k] === target) {
                sets.push([nums[i], nums[j], nums[k]]);
                while (j < k && nums[j] === nums[j+1]) j++;
                while (j < k && nums[k] === nums[k-1]) k--;
                j++;
                k--;
            }
            else if (nums[j] + nums[k] < target) {
                j++;
            }
            else {
                k--;
            }
        }
    }
    return sets;
};