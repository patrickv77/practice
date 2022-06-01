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
    if(s.length !== t.length) return false;

    let hm = new Map();
    for(let i = 0; i < s.length; i++) {
        if(hm.has(s.charAt(i))) {
            hm.set(s.charAt(i),hm.get(s.charAt(i))+1);
        }else{
            hm.set(s.charAt(i), 1);
        }
    }

    for(let i = 0; i < t.length; i++) {
        if(hm.get(t.charAt(i)) === undefined){
            return false
        }

        if(hm.get(t.charAt(i)) === 1) {
            hm.delete(t.charAt(i));
        }else{
            hm.set(t.charAt(i), hm.get(t.charAt(i))-1);
        }
    }

    if(hm.size() === 0) {
        return true;
    }else{
        return false;
    }
};

/*
Runtime: 86 ms, faster than 84.32% of JavaScript online submissions for Valid Anagram.
Memory Usage: 44.1 MB, less than 55.34% of JavaScript online submissions for Valid Anagram.
*/

//previous ascii implementation was much faster