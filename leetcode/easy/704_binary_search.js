/*
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.
 */

/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let len = nums.length-1;
    let l = 0, r = len;
    while(l <= r) {
        let mid = Math.floor((l+r)/2);
        if(nums[mid] === target) {
            return mid;
        } else if(nums[mid] > target) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return -1;
};

/*
Runtime: 70 ms, faster than 80.04% of JavaScript online submissions for Binary Search.
Memory Usage: 45.2 MB, less than 34.83% of JavaScript online submissions for Binary Search.
 */