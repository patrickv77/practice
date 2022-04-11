/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.
*/

/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var itr = 0;
    var previous = nums[itr];
    while(previous < target) {
        itr++;
        previous = nums[itr];
    }
    return itr;
};

/*
Runtime: 99 ms, faster than 19.67% of JavaScript online submissions for Search Insert Position.
Memory Usage: 41.9 MB, less than 92.74% of JavaScript online submissions for Search Insert Position.
*/