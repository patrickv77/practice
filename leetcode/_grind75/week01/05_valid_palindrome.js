/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

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

    let left = 0, right = s.length-1; 
    while(left < right) {
        if(s.charAt(left) != s.charAt(right)) {
            return false;
        }
        left++; right--;
    }
    return true;
};

/*
Runtime: 105 ms, faster than 43.99% of JavaScript online submissions for Valid Palindrome.
Memory Usage: 43.9 MB, less than 95.53% of JavaScript online submissions for Valid Palindrome.
*/