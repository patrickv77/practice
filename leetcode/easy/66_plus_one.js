/*
You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.
*/

/*
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    var itr = digits.length - 1;
    var check = isNine(digits[itr]);
    
    while(check && itr != 0) {
        if(check){
            digits[itr] = 0;
            itr--;
            check = isNine(digits[itr]);
        }
    }
    if(check){
        digits[itr] = 0;
        digits.unshift(1);
    }else{
        digits[itr] = digits[itr]+1;
    }
    return digits;
};

function isNine(x) {
    if(x == 9) {
        return true;
    } else {
        return false;
    }
}

/*
Runtime: 60 ms, faster than 93.55% of JavaScript online submissions for Plus One.
Memory Usage: 42.2 MB, less than 40.14% of JavaScript online submissions for Plus One.
*/