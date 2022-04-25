/*A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
*/

/*
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var regex = /[^a-z0-9]/g;

    s = s.toLowerCase();
    s = s.replace(regex, "");

    var itrForward = 0;
    var itrBackward = s.length-1;

    for(itrForward; itrForward < parseInt(s.length/2); itrForward++) {
        if(s.charAt(itrForward) != s.charAt(itrBackward)){
            return false;
        }
        itrBackward--;
    }

    return true;
};

/*
Runtime: 127 ms, faster than 21.19% of JavaScript online submissions for Valid Palindrome.
Memory Usage: 44.4 MB, less than 80.33% of JavaScript online submissions for Valid Palindrome.
 */