/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.
*/

/*
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/*
var moveZeroes = function(nums) {
    let len = nums.length;
    if(len === 1) return nums;

    for(let i = 0; i < len; i++) {
        if(nums[i] === 0) {
            nums.push(nums.splice(i,1)[0]);
            i--;
            len--;
        }
    }

    //return nums;
};
*/

/*
Runtime: 134 ms, faster than 39.67% of JavaScript online submissions for Move Zeroes.
Memory Usage: 46.8 MB, less than 54.47% of JavaScript online submissions for Move Zeroes.
 */

// IN PLACE SOLUTION
var moveZeroes = function(nums) {
    let len = nums.length;
    if(len === 1) return nums;

    for(let i = 0; i < len-1; i++) {
        let r = i, l = i+1;
        if(nums[r] === 0) {
            while(r < len-1){
                if(l < len){
                    if(nums[l] != 0) {
                        let temp = nums[r];
                        nums[r] = nums[l];
                        nums[l] = temp;
                        r = l;
                        l = r+1;
                    } else {
                        l++;
                    }
                } else {
                    r++;
                }
            }
            len--;
        }
    }

};

/*
Runtime: 298 ms, faster than 5.91% of JavaScript online submissions for Move Zeroes.
Memory Usage: 46.6 MB, less than 63.23% of JavaScript online submissions for Move Zeroes.
*/

