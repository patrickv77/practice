/*
Given a non-negative integer x, compute and return the square root of x.

Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.
*/

/*
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    var itr = 0;
    while(itr * itr < x) {
        if(itr*itr === x) return itr;
        itr++;
    }

    return itr-1;
};

//the obvious solution is math.floor(math.sqrt(x)).. feels odd they would allow this if they arent allowing pow

/*
Runtime: 157 ms, faster than 14.83% of JavaScript online submissions for Sqrt(x).
Memory Usage: 43.8 MB, less than 46.98% of JavaScript online submissions for Sqrt(x).
 */