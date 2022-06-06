/*
Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.
*/

/*
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const hm = new Map();
    let arr = [];

    for(let i = 0; i < s.length; i++) {
        let ch = s.charAt(i);
        if(hm.get(ch)) {
            hm.set(ch, hm.get(ch) + 1);
        }else{
            arr = [...arr, ch];
            hm.set(ch, 1);
        }
    }

    let res = 0;
    let hasOdd = false;

    for(let i = 0; i < arr.length; i++) {
        let num = hm.get(arr[i]);
        if(num%2 === 0) {
            res += num;
        }else{
            res += num - 1;
            hasOdd = true;
        }
    }

    if(hasOdd){
        res++;
    }

    return res;
};

/*
Runtime: 106 ms, faster than 28.02% of JavaScript online submissions for Longest Palindrome.
Memory Usage: 45.2 MB, less than 8.56% of JavaScript online submissions for Longest Palindrome.
*/