/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
*/

/*
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length != t.length) return false;

    let res = new Array(26);
    res.fill(0);

    for(let i = 0; i < s.length; i++) {
        res[s.charCodeAt(i)-97]++;
        res[t.charCodeAt(i)-97]--;
    }

    for(let i = 0; i < res.length; i++) {
        if(res[i] != 0) {
            return false;
        }
    }

    return true;
};

console.log(isAnagram("rat","car"));

/*
Runtime: 69 ms, faster than 98.30% of JavaScript online submissions for Valid Anagram.
Memory Usage: 42.4 MB, less than 95.38% of JavaScript online submissions for Valid Anagram.
*/