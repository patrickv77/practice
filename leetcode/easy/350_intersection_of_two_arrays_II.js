/*
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.
*/

/*
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let n1 = nums1, n2 = nums2;
    let n1Len = n1.length, n2Len = n2.length;
    let res = [];

    //will write the code such that n1 is shorter or equal in length to n2
    if(n1Len > n2Len){
        n1 = nums2, n2 = nums1;
        n1Len = n1.length, n2Len = n2.length;
    }

    //fill hashmap with values of longest array
    const mapN2 = new Map();
    for(let i = 0; i < n2Len; i++) {
        if(mapN2.has(n2[i])){
            mapN2.set(n2[i], mapN2.get(n2[i])+1);
        }else{
            mapN2.set(n2[i], 1);
        }
    }

    //traverse small array and add like numbers into result array, decrement hm value at key when used
    for(let i = 0; i < n1Len; i++) {
        if(mapN2.has(n1[i])) {
            res.push(n1[i]);
            mapN2.set(n1[i], mapN2.get(n1[i])-1);

            if(mapN2.get(n1[i]) === 0) {
                mapN2.delete(n1[i]);
            }
        }
    }
    return res;
};

/*
Runtime: 96 ms, faster than 37.33% of JavaScript online submissions for Intersection of Two Arrays II.
Memory Usage: 44.6 MB, less than 20.08% of JavaScript online submissions for Intersection of Two Arrays II.
 */