/*
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).
*/

/*
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let m = nums1.length;
    let n = nums2.length;

    let mItr = 0, nItr = 0;

    var arr = new Array(m+n);
    for(var i = 0; i < arr.length; i++) {
        if(nItr == n) {
            arr[i] = nums1[mItr];
            mItr++;
        }else if(mItr == m) {
            arr[i] = nums2[nItr];
            nItr++;
        }else{
            if(nums1[mItr] < nums2[nItr]){
                arr[i] = nums1[mItr];
                mItr++;
            } else { 
                arr[i] = nums2[nItr];
                nItr++;
            }
        }
    }

    if((m+n) % 2 == 1) {
        return arr[parseInt((m+n)/2)];
    } else {

        return (arr[(m+n)/2] + arr[((m+n)/2)-1])/2;
    }
};

/*
Runtime: 145 ms, faster than 57.27% of JavaScript online submissions for Median of Two Sorted Arrays.
Memory Usage: 46.6 MB, less than 81.12% of JavaScript online submissions for Median of Two Sorted Arrays.
 */