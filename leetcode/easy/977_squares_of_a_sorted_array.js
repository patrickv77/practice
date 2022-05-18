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

console.log(sortedSquares([-4,-1,0,3,10]));

/*

 */