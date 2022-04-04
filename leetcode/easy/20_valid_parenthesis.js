/*Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
*/

/*
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length % 2 == 1) {
        return false;
    }
    
    var arr = [];
    for(var i = 0; i < s.length; i++) {
        if(s.charAt(i) == '(' || s.charAt(i) == '[' || s.charAt(i) == '{') { 
            arr.push(s.charAt(i));
        } else {
            if(arr.length == 0) return false;
            var asciiTemp = s.charAt(i).charCodeAt() - arr.pop().charCodeAt();
            if(asciiTemp !== 1 && asciiTemp !== 2) {
                return false;
            }
        }
    }
    
    if(arr.length == 0){
        return true;
    }else{
        return false;
    }
};

/**
 Runtime: 87 ms, faster than 48.12% of JavaScript online submissions for Valid Parentheses.
Memory Usage: 42.3 MB, less than 50.79% of JavaScript online submissions for Valid Parentheses.
 */