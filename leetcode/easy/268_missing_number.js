/*
Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
*/

/*
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var res = 0;

    for(var i = 0; i < nums.length; i++) {
        res += (i + 1 - nums[i]) ;
    }

    return res;
};

/*
Runtime: 85 ms, faster than 66.58% of JavaScript online submissions for Missing Number.
Memory Usage: 44.3 MB, less than 64.76% of JavaScript online submissions for Missing Number.
*/