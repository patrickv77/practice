/*
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
*/

/*
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const hm = new Map();

    //fill map
    for(let i = 0; i < s.length; i++) {
        let k = s.charAt(i);
        if(hm.has(k)) {
            hm.set(k, hm.get(k) + 1);
        } else { 
            hm.set(k, 1);
        }
    }

    //find unique letter
    for(let i = 0; i < s.length; i++) {
        if(hm.get(s.charAt(i)) === 1) {
            return i;
        }
    }

    return -1;
};

console.log(firstUniqChar("leetcode"));

/*
Runtime: 155 ms, faster than 37.15% of JavaScript online submissions for First Unique Character in a String.
Memory Usage: 44.6 MB, less than 94.37% of JavaScript online submissions for First Unique Character in a String.
*/