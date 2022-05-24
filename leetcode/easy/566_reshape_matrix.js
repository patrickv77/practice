/*
In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different size r x c keeping its original data.

You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of the wanted reshaped matrix.

The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.

If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.
*/

/*
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    let numRows = mat.length, numCols = mat[0].length;

    if((r * c) !== (numRows * numCols)) return mat;

    let arr = [];
    for(let i = 0; i < mat.length; i++) {
        arr = arr.concat(mat[i]);
    }

    let res = [];
    let arrItr = 0;
    for(let i = 0; i < r; i++) {
        res.push([]);
        for(let j = 0; j < c; j++) {
            res[i].push(arr[arrItr]);
            arrItr++;
        }
    }

    return res;
};

/*
Runtime: 149 ms, faster than 8.64% of JavaScript online submissions for Reshape the Matrix.
Memory Usage: 47.5 MB, less than 8.81% of JavaScript online submissions for Reshape the Matrix.
*/