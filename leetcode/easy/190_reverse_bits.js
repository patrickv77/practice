/*
Reverse bits of a given 32 bits unsigned integer.

Note:

Note that in some languages, such as Java, there is no unsigned integer type. In this case, both input and output will be given as a signed integer type. They should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 2 above, the input represents the signed integer -3 and the output represents the signed integer -1073741825.
*/

/*
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    var res = 0;
    var i = 31;
    while(i > 0){
        res = res << 1;
        if(n & 1){
            res = res | 1;
        }
        n = n >> 1;
        i -= 1;
    }
    if(n & 1){
        return  res * 2 + 1;
    } else {
        return res * 2;
    }
};

/*

 */

//not my code, only added to study it