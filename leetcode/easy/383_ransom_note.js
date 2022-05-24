/*
Given two strings ransomNote and magazine, return true if ransomNote can be constructed from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.
*/

/*
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    var stringToMap = function(s) {
        const hm = new Map();
        for(let i = 0; i < s.length; i++) {
            let k = s.charAt(i);
            if(hm.has(k)) {
                hm.set(k, hm.get(k) + 1);
            } else { 
                hm.set(k, 1);
            }
        }

        return hm;
    }

    const ransomMap = stringToMap(ransomNote), magazineMap = stringToMap(magazine);
    const ransomKeys = ransomMap.keys();

    let temp = ransomKeys.next().value;
    while(temp != undefined) {
        if(ransomMap.get(temp) > magazineMap.get(temp) || magazineMap.get(temp) === undefined) {
            return false;
        }
        temp = ransomKeys.next().value;
    }
    return true;
};

console.log(canConstruct("a","b"));

/*
Runtime: 169 ms, faster than 14.68% of JavaScript online submissions for Ransom Note.
Memory Usage: 44.4 MB, less than 76.86% of JavaScript online submissions for Ransom Note.
*/