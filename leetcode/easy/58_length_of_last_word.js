/*
Given a string s consisting of some words separated by some number of spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.
*/

/*
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim();
    var arr = s.split(" ");
    return arr[arr.length-1].length;
};

/*
Runtime: 76 ms, faster than 62.85% of JavaScript online submissions for Length of Last Word.
Memory Usage: 41.8 MB, less than 72.85% of JavaScript online submissions for Length of Last Word. 
 */
