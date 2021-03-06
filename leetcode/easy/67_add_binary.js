/*
Given two binary strings a and b, return their sum as a binary string.
*/

/*
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {

    if(a.length > b.length) {
        b = b.padStart(a.length, "0");
    }else{
        a = a.padStart(b.length, "0");
    }

    var res = "";
    var carry = 0;

    for(var i = a.length-1; i >= 0; i--) {
        var temp = parseInt(a.charAt(i)) + parseInt(b.charAt(i)) + carry;
        if(temp > 1) {
            carry = 1;
            temp %= 2;
            res = temp.toString() + res;
        }else{
            carry = 0;
            res = temp.toString() + res;
        }
    }
    if(carry == 1) {
        res = "1" + res;
    }

    return res;
};

/*
Runtime: 111 ms, faster than 25.12% of JavaScript online submissions for Add Binary.
Memory Usage: 43 MB, less than 68.60% of JavaScript online submissions for Add Binary.
*/