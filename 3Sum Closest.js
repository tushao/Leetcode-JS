/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums = nums.sort(function(a, b)
    {
        return a-b;
        
    });
    var output = 0;
    var min_diff = Number.MAX_VALUE;

    
    for (var i = 0; i < nums.length; i++) {
        var j = i + 1;
        var k = nums.length - 1;
        while (j < k) {
            var sum = nums[i] + nums[j] + nums[k];
            diff = Math.abs(sum - target);
            if (diff < min_diff) {
                min_diff = diff;
                output = sum;
            }
            if (sum < target) {
                j++;
            }
            else {
                k--;
            }
        }
        
    }
    return output;
};
