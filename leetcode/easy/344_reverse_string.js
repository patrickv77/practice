/*
Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.
*/

/*
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let len = s.length;
    let even = false;
    if(len%2 === true) even = true;

    let r = 0, l = len-1;
    if(even) {
        while(r < len/2) {
            let temp = s[r];
            s[r] = s[l];
            s[l] = temp;
            r++;
            l--;
        }
    } else {
        let mid = (r+l)/2;
        while(r < mid) {
            let temp = s[r];
            s[r] = s[l];
            s[l] = temp;
            r++;
            l--;
        }
    }
};

console.log(reverseString(['H','e','l','l','o']));

/*
Runtime: 102 ms, faster than 73.18% of JavaScript online submissions for Reverse String.
Memory Usage: 49 MB, less than 85.34% of JavaScript online submissions for Reverse String.
*/