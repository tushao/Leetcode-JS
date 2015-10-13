var majorityElement = function(nums) {
    nums.sort();
    if( nums.length > 1) {
        return nums[parseInt(nums.length / 2)];
    }
    else {
        return nums[0];
    }
};

/*
1 / 2      // returns 0.5 in JavaScript
1 / 2      // returns 0 in Java 
// (neither number is explicitly a floating point number)

1.0 / 2.0  // returns 0.5 in both JavaScript and Java
*/