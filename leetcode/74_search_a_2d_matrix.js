/*
Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.
*/

/*
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    var findRow = function(matrix, target) {
        let numRows = matrix.length;
        let low = 0, high = numRows - 1;
        let mid = Math.floor((high + low) / 2);

        let rowFound = false;
        while(!rowFound) {
            
            if(matrix[mid][0] <= target && matrix[mid][matrix[mid].length-1] >= 0) {
                rowFound = true;
            }

            if(mid === low || mid === high) {
                return mid;
            }

            if(matrix[mid][0] > target) {
                high = mid-1;
                mid = Math.floor((high + low) / 2);
            } else if (matrix[mid][0] < target) {
                low = mid + 1;
                mid = Math.floor((high + low) / 2);
            } else {
                rowFound = true;
            }
        }
        return mid;
    }

    let row  = 0;

    if(matrix.length != 1) {
        row = findRow(matrix,target);
    }

    //can implement binary search in case of very long row length
    for(let i = 0; i < matrix[row].length; i++) {
        if(matrix[row][i] === target) {
            return true;
        }
    }

    return false;
};

console.log(searchMatrix([[1],[3]],3));





/*

 */