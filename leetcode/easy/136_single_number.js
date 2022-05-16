/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.
*/

/*
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const hm = new Map();

    for(var i = 0; i < nums.length; i++) {
        if(!hm.has(nums[i])){
            hm.set(nums[i], 1);
        }else{
            hm.delete(nums[i]);
        }
    }

    const keyItr = hm.keys();

    return keyItr.next().value;
};

/*
Runtime: 74 ms, faster than 85.37% of JavaScript online submissions for Single Number.
Memory Usage: 47.8 MB, less than 19.38% of JavaScript online submissions for Single Number.
*/

/*
bitwise XOR is insane in this application:

res = nums[0]

for(i=1; i < nums.length; i++){
    res = res^nums[i]
}

return res;
*/