/*
Given an array, rotate the array to the right by k steps, where k is non-negative.
*/

/*
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    //modulo k by nums.length, if you rotate k nums.length times, you get the same array
    if(k >= nums.length){
        k = k%nums.length;
    }

    if(k===0) return nums;

    nums.unshift(...nums.slice(-k));
    nums.splice(-k);
    return nums;
};

/*
Runtime: 128 ms, faster than 45.94% of JavaScript online submissions for Rotate Array.
Memory Usage: 55.5 MB, less than 5.26% of JavaScript online submissions for Rotate Array.
*/

//my original solution was too slow:

/*
for(let i = 0; i < k; i++) {
    nums.unshift(nums.pop());
}
*/