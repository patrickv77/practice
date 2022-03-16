/*Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
*/

var longestCommonPrefix = function(strs) {
    var added = true;
    var prefix = "";
    var letterIndex = 0;
    var word = strs[0];

    while(added && letterIndex < word.length) {

        for(var i = 1; i < strs.length;i++) {
            if(word.charAt(letterIndex) != strs[i].charAt(letterIndex)) {
                added = false;
            }
        }
        if(added) {
            prefix += word.charAt(letterIndex);
            letterIndex++;
        }
    }

    return prefix;
};

/*
Runtime: 84 ms, faster than 63.64% of JavaScript online submissions for Longest Common Prefix.
Memory Usage: 43.1 MB, less than 30.69% of JavaScript online submissions for Longest Common Prefix.
*/