/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

-Open brackets must be closed by the same type of brackets.
-Open brackets must be closed in the correct order.
*/

/*
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length%2 !== 0) return false;
    
    let open = ['[', '{', '('];
    let close = [']', '}', ')'];

    let stack = [];
    let firstOpen = '';
    for(let i = 0; i < s.length; i++) {
        if(open.indexOf(s.charAt(i)) !== -1) {
            firstOpen = s.charAt(i);
            stack.push(s.charAt(i));
        }else{
            if(open[close.indexOf(s.charAt(i))] !== firstOpen) {
                return false;
            }else{
                stack.pop();
                firstOpen = stack[stack.length-1];
            }
        }
    }

    if(stack.length === 0) {
        return true;
    }else{
        return false;
    }
    
};

console.log(isValid("(("));

/*
Runtime: 69 ms, faster than 77.00% of JavaScript online submissions for Valid Parentheses.
Memory Usage: 42.3 MB, less than 46.57% of JavaScript online submissions for Valid Parentheses.
*/