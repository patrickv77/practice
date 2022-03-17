/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.
*/

//store each variable as a number, check for special numbers, abs(num1 - num2) else +=

/*
 * @param {string} s
 * @return {number}
 */

var romanToIntHelp = function(ch){
    switch (ch) {
        case 'I': return 1;
        case 'V': return 5;
        case 'X': return 10;
        case 'L': return 50;
        case 'C': return 100;
        case 'D': return 500;
        case 'M': return 1000;
        default: break;
    }
};

var romanToInt = function(s) {
        var total = 0;
        var itr = 0;
        while (itr < s.length) {
            if(itr == s.length-1) {
                total += romanToIntHelp(s.charAt(itr));
                itr++;
            }else{
                var sub = s.substr(itr,2);
                console.log(sub);
                if(sub == "IV" || sub == "IX" || sub == "XL" || sub == "XC" || sub == "CD" || sub == "CM") {
                    total += romanToIntHelp(s.charAt(itr+1)) - romanToIntHelp(s.charAt(itr));
                    itr += 2;
                } else {
                    total += romanToIntHelp(s.charAt(itr));
                    itr++;
                }
            }
        }
        return total;
};

/*
Runtime: 235 ms, faster than 31.21% of JavaScript online submissions for Roman to Integer.
Memory Usage: 47 MB, less than 63.96% of JavaScript online submissions for Roman to Integer.
*/