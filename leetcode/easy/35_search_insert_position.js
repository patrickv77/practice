/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.
*/

/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
/*
//NAIVE SOLUTION
var searchInsert = function(nums, target) {
    var itr = 0;
    var previous = nums[itr];
    while(previous < target) {
        itr++;
        previous = nums[itr];
    }
    return itr;
};
*/

/*
Runtime: 99 ms, faster than 19.67% of JavaScript online submissions for Search Insert Position.
Memory Usage: 41.9 MB, less than 92.74% of JavaScript online submissions for Search Insert Position.
*/

//            BINARY SEARCH SOLUTION

/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let l = 0, r  = nums.length-1;
    if(nums[r] < target){
        return r+1;
    }

    let mid = Math.floor((l+r)/2);

    while(l <= r) {
        mid = Math.floor((l+r)/2);
        if(nums[mid] === target) {
            return mid;
        } else if(nums[mid] > target && nums[mid-1] < target) {
            return mid;
        } else if(nums[mid] > target){
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }

    return mid;
};

/*
Runtime: 73 ms, faster than 58.83% of JavaScript online submissions for Search Insert Position.
Memory Usage: 41.8 MB, less than 91.75% of JavaScript online submissions for Search Insert Position.
 */