/*
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
 */

/*
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
    if(x == 0) return 0;
    if(x == null) return null;

    //deals with negatives
    var isNeg = false;
    if(x < 0) {
        isNeg = true;
        x *= -1;
    }

    //convert to string, then to array, and reverse
    x = x.toString().split('').reverse();

    //remove leading 0s
    while(x[0] == 0){
        x.shift();
    }

    //convert array to string, remove ',' and change to int
    x = parseInt(x.join().replace(/,/g,''));

    if(isNeg){
        x *= -1;
    }
    
    if(x < -2147483648 || x > 2147483648) return 0;
    
    return x;
};

/*
Runtime: 76 ms, faster than 87.90% of JavaScript online submissions for Reverse Integer.
Memory Usage: 44.4 MB, less than 22.58% of JavaScript online submissions for Reverse Integer.
 */