/*
Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
*/

/*
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    for(let i = 0; i < nums.length; i++) {
        nums[i] *= nums[i];
    }
    
    return nums.sort(function(a,b){
        return a-b;
    });
};

/*
Runtime: 163 ms, faster than 32.96% of JavaScript online submissions for Squares of a Sorted Array.
Memory Usage: 48 MB, less than 98.38% of JavaScript online submissions for Squares of a Sorted Array.
 */