/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
*/

/*
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const hm = new Map();
    for(let i = 0; i < nums.length; i++) {
        if(hm.has(nums[i])) {
            return false;
        } else { 
            hm.set(nums[i], 1);
        }
    }
    return true;
};

/*
Runtime: 123 ms, faster than 50.43% of JavaScript online submissions for Contains Duplicate.
Memory Usage: 51 MB, less than 45.76% of JavaScript online submissions for Contains Duplicate.
 */