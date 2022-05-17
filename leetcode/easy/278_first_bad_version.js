/*
You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.
 */

/*
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/*
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /*
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let r = n;
        let l = 0;
        while(l <= r) {
            let mid = Math.floor((l+r)/2);
            let version = isBadVersion(mid);
            if(version !== isBadVersion(mid+1)){
                return mid+1;
            }else if(version === false) {
                l = mid+1;
            }else{
                r = mid-1;
            }
        }
    };
};

/*
Runtime: 82 ms, faster than 43.59% of JavaScript online submissions for First Bad Version.
Memory Usage: 42.2 MB, less than 19.90% of JavaScript online submissions for First Bad Version.
 */

