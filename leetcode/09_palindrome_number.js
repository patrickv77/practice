/*
Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.
*/

/*
 * @param {number} x
 * @return {boolean}
 */

 var isPalindrome = function(x) {
    if(x==null) return null;

        var str = x.toString();
        var halfway = x/2;
        var decr = str.length-1;
        for(var i = 0; i < str.length/2;i++){
            if(str.charAt(i) != str.charAt(decr)) {
                return false;
            }
            decr--;
        }
        return true;
};

/*
Runtime: 223 ms, faster than 70.99% of JavaScript online submissions for Palindrome Number.
Memory Usage: 50.9 MB, less than 57.72% of JavaScript online submissions for Palindrome Number.
*/