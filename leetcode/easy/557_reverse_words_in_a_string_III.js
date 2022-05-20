/*
Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.
*/

/*
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let t = s.split(" ");

    for(let i = 0; i < t.length; i++) {
        t[i] = t[i].split("").reverse().join("");
    }

    return t.join(" ");
};

/*
Runtime: 102 ms, faster than 45.21% of JavaScript online submissions for Reverse Words in a String III.
Memory Usage: 47.8 MB, less than 97.57% of JavaScript online submissions for Reverse Words in a String III.
*/