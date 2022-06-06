/*
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
*/

/*
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let a = 1, b = 1;
    while(n--) {
        a = (b += a) - a;
    }
    return a;
};

/*
Runtime: 78 ms, faster than 47.23% of JavaScript online submissions for Climbing Stairs.
Memory Usage: 42 MB, less than 32.82% of JavaScript online submissions for Climbing Stairs.
*/