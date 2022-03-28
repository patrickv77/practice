/*
Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Clarification:

What should we return when needle is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().
*/

/*
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
     for(var i = 0; i < haystack.length - needle.length; i++) { 
        var temp = haystack.slice(i, i + needle.length);
        if(temp == needle) {
            return i;
        }
    }
    return -1;
 };

/*
simplest solution:
    return haystack.indexOf(needle);
*/

/**
Runtime: 111 ms, faster than 42.20% of JavaScript online submissions for Implement strStr().
Memory Usage: 44.4 MB, less than 12.54% of JavaScript online submissions for Implement strStr().
 */