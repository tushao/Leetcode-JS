/**
 * @param {number[]} nums
 * @return {number}
 */
 //DP
var jump = function(nums) {
    var steps = [];
    steps.length = nums.length;
    steps[0] = 0;
    
    for (var i = 1; i < nums.length; i++) {
        steps[i] = Number.MAX_VALUE;
        for (var j = 0; j < i; j++) {
            if (steps[j] !== Number.MAX_VALUE && j + nums[j] >= i) {
                steps[i] = steps[j] + 1;
                break;
            }
        }
    }
    return steps[nums.length - 1];
};

//
var jump = function(nums) {
    var max = nums[0], len = nums.length, beginIndex = 0, endIndex, count = 1;
    
    if (len < 2) {
        return 0;
    }
    
    endIndex = nums[0];

    while (max < len - 1) {
        var n = beginIndex, m = endIndex;
        beginIndex = endIndex + 1;
        for (var i = n; i <= m; i++) {
            if (i + nums[i] > max) {
                max = i + nums[i];
                endIndex = max;
            }
        }
        count++;
    }
    
    return count;
};