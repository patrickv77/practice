/*You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, 
representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. 
To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, 
and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
*/

/*
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    if(m === 0) {
        for(var i = 0; i < nums1.length; i++) {
            nums1[i] = nums2[i];
        }
        return nums1;
    }
    
    if(n === 0) {
        return nums1;
    }
        
    for(var i = m + n - 1; i >= 0; i--) {
        if(m === 0) {
            nums1[i] = nums2[n-1];
            n--;
        } else if(n === 0) {
            return nums1;
        } else {
            if(nums2[n-1] >= nums1[m-1]) {
                nums1[i] = nums2[n-1];
                n--;
            } else {
                nums1[i] = nums1[m-1];
                m--;
            }
        }
    }
    return nums1;
};

/*
Runtime: 60 ms, faster than 93.26% of JavaScript online submissions for Merge Sorted Array.
Memory Usage: 42.4 MB, less than 35.63% of JavaScript online submissions for Merge Sorted Array.
*/