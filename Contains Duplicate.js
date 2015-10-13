/**
 * @param {number[]} nums
 * @return {boolean}
 */

 //我才知道有sort()這樣強大的函數。。。。。。
var containsDuplicate = function(nums) {
    nums.sort();
    for( var i = 0; i < nums.length; i++) {
        if(nums[i] === nums[i + 1]) {
            return true;
        }
    }
    return false;
    
};