/*
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.
*/

/*
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if(ransomNote.length > magazine.length) return false;
    let magMap = new Map();

    for(let i = 0; i < magazine.length; i++) {
        let ch = magazine.charAt(i);
        if(magMap.get(ch)){
            magMap.set(ch, magMap.get(ch)+1);
        }else{
            magMap.set(ch, 1);
        }
    }

    for(let i = 0; i < ransomNote.length; i++) {
        let ch = ransomNote.charAt(i);
        if(magMap.get(ch)){
            let decr = magMap.get(ch) - 1;
            if (decr < 0) {
                return false;
            }else{
                magMap.set(ch, decr);
            }
        }else{
            return false;
        }
    }

    return true;
};

/*
Runtime: 121 ms, faster than 49.45% of JavaScript online submissions for Ransom Note.
Memory Usage: 44.3 MB, less than 81.57% of JavaScript online submissions for Ransom Note.
*/