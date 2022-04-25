/*
Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
*/

/*
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    var res = [1];
    
    if(rowIndex === 0) {
        return res;
    }else if(rowIndex > 34) {
        return "no";
    }else{
        for(var i = 1; i <= rowIndex; i++){
            res = pascal(res, i+1);
        }
    }
    return res;
};

var pascal = function(arr, len){
    var tempArr = new Array(len);

    tempArr[0] = 1;
    for(var i = 1; i < tempArr.length-1; i++){
        tempArr[i] = arr[i-1] + arr[i];
    }
    tempArr[tempArr.length-1] = 1;

    return tempArr;
};

console.log(getRow(3));

/*
Runtime: 80 ms, faster than 48.19% of JavaScript online submissions for Pascal's Triangle II.
Memory Usage: 42.2 MB, less than 59.04% of JavaScript online submissions for Pascal's Triangle II.
*/