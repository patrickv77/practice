/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.
*/

/*
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSub = 0;
    let currSub = 0;
    let maxEle = nums[0];

    for(let i = 0; i < nums.length; i++){
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

    if(maxSub === 0) {
        return maxEle;
    }

    return maxSub;
};

/*
Runtime: 94 ms, faster than 73.00% of JavaScript online submissions for Maximum Subarray.
Memory Usage: 50.3 MB, less than 71.09% of JavaScript online submissions for Maximum Subarray.
 */