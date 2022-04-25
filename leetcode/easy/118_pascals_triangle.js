/*
Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
*/

/*
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {  
    var res = [[1]];
    
    if(numRows === 1) {
        return res;
    }else if(numRows > 33) {
        return "no";
    }else{
        for(var i = 1; i < numRows; i++){
            res.push(pascal(res[i-1], i+1));
        }
    }

    return res;
};

var pascal = function(arr, len){
    var tempArr = new Array(len);
    if(len === 2) {
        tempArr[0] = 1;
        tempArr[1] = 1;
    }else{
        tempArr[0] = 1;
        for(var i = 1; i < tempArr.length-1; i++){
            tempArr[i] = arr[i-1] + arr[i];
        }
        tempArr[tempArr.length-1] = 1;
    }

    return tempArr;
};

/*
Runtime: 56 ms, faster than 95.33% of JavaScript online submissions for Pascal's Triangle.
Memory Usage: 42.3 MB, less than 36.62% of JavaScript online submissions for Pascal's Triangle.
 */