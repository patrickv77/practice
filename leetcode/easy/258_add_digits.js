/*
Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.
*/

/*
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    while(num > 9){
        var temp = Array.from(num.toString()).map(Number);
        num = 0;
        temp.forEach(x => num += x);
    }

    return num;
};

/*
Runtime: 124 ms, faster than 20.58% of JavaScript online submissions for Add Digits.
Memory Usage: 44.5 MB, less than 15.40% of JavaScript online submissions for Add Digits.
 */