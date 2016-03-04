/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
   var result = [];
   var hash = new Map();
   
   for (var i = 0; i < nums.length; i++) {
       if(hash.has(target - nums[i])) {
           result.push(hash.get(target - nums[i]), i);
           break;
       }
       hash.set(nums[i], i);
   }
   return result;
};