/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.
*/

/*
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var maxSub = 0;
    var currSub = 0;
    var maxEle = nums[0];

    for(var i = 0; i < nums.length; i++){
        currSub += nums[i];
        if(currSub < 0) {
            currSub = 0;
        }

        if(currSub > maxSub) {
            maxSub = currSub;
        }

        if(nums[i] > maxEle) {
            maxEle = nums[i];
        }
    }

    //if maxSub = 0, all elements are less than or equal to 0 which means the max subarray is equal to the largest element
    if(maxSub === 0) {
        return maxEle;
    }

    return maxSub;
};

/*
Runtime: 126 ms, faster than 31.16% of JavaScript online submissions for Maximum Subarray.
Memory Usage: 50.2 MB, less than 82.18% of JavaScript online submissions for Maximum Subarray.
*/