/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var hash = {};
    
    for(var i = 0; i < nums.length; i++){
        hash[nums[i]] = i;
    }
    
    for(i = 0; i < nums.length; i++){
        var num = nums[i];
        var diff = target - num;
        if(hash[diff] !== undefined && hash[diff] !== i){
            if(hash[diff] > i){
                return [i, hash[diff]];
            } else {
                return [hash[diff], i]
            }
        }
    }
    
    return [];

};