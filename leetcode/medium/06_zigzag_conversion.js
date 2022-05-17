/*
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
*/

/*
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows == 1){
        return s;
    }

    let arr = s.split("");
    var matrix = [];

    //init the grid matrix
    for (var i = 0; i < numRows; i++) {
        matrix[i] = []; 
    }

    //fill 2d array with zigzagged letters
    let columnItr = 0, rowItr = 0;
    for(let i = 0; i < arr.length; i++) {
        if(rowItr == 0) {
            while(rowItr < numRows && i < arr.length){
                matrix[rowItr][columnItr] = arr[i];
                rowItr++;
                i++;
            }
            columnItr++;
            i--;
            rowItr -= 2;
        }else{
            matrix[rowItr][columnItr] = arr[i];
            rowItr--;
            columnItr++;
        }
    }

    let res = "";
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            if(matrix[i][j] != undefined) {
                res += matrix[i][j];
            }
        }
    }

    return res;
};

/*
Runtime: 148 ms, faster than 34.68% of JavaScript online submissions for Zigzag Conversion.
Memory Usage: 53.3 MB, less than 9.90% of JavaScript online submissions for Zigzag Conversion.
 */