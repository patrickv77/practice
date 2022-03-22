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
Given an integer, convert it to a roman numeral.
*/

/*
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var str = "";
    var itr = 0;
    while(num > 0) {
        var temp = num%10;
        temp = temp * Math.pow(10, itr);
        var tStr = helper(temp);

        if(tStr == "nextHelper"){
            var t2 = "";
            while(temp != 0) {
                var tempInt = highestPositiveNumber(temp);
                var tempRoman = helper(tempInt);
                t2 += tempRoman;
                temp = temp - tempInt;
            }
            str = t2 + str;
            num = parseInt(num/10);
            itr++;
        }else{
            num = parseInt(num/10);
            str = tStr + str;
            itr++;
        }
    }
    return str;
};

var highestPositiveNumber = function (x){
    var arr = [1000, 500, 100, 50, 10, 5, 1];
    var itr = 0;
    var diff = -1;
    while(diff < 0) {
        diff = x - arr[itr];
        itr++;
    }
    return arr[itr-1];
}

var helper = function(num) {
    switch(num){
        case 1: return "I";
        case 4: return "IV";
        case 5: return "V";
        case 9: return "IX";
        case 10: return "X";
        case 40: return "XL";
        case 50: return "L";
        case 90: return "XC";
        case 100: return "C";
        case 400: return "CD";
        case 500: return "D";
        case 900: return "CM";
        case 1000: return "M";
        default: return "nextHelper";
    }
}
/*
Runtime: 195 ms, faster than 49.54% of JavaScript online submissions for Integer to Roman.
Memory Usage: 46.5 MB, less than 89.57% of JavaScript online submissions for Integer to Roman.
*/
