/*
You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".
*/

/*
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let hm = new Map();
    for(let i = 0; i < stones.length; i++) {
        if(hm.has(stones.charAt(i))){
            hm.set(stones.charAt(i),hm.get(stones.charAt(i))+1);
        }else{
            hm.set(stones.charAt(i),1);
        }
    }

    let res = 0;
    for(let i = 0; i < jewels.length; i++) {
        if(hm.get(jewels.charAt(i))) {
            res += hm.get(jewels.charAt(i));
        }
    }

    return res;
};

console.log(numJewelsInStones("z", "ZZ"));

/*
Runtime: 93 ms, faster than 34.99% of JavaScript online submissions for Jewels and Stones.
Memory Usage: 43.3 MB, less than 27.47% of JavaScript online submissions for Jewels and Stones.
*/