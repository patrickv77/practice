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
    if(matrix[0][0] > target) return false;
    if(matrix[matrix.length-1][matrix[0].length-1] < target) return false;

    var findRow = function(matrix, target) {
        let low = 0, high = matrix.length - 1;

        while(low <= high) {
            if(matrix[low][0] <= target && matrix[low][matrix[low].length-1] >= target) {
                return low;
            }

            if(matrix[high][0] <= target && matrix[high][matrix[high].length-1] >= target) {
                return high;
            }

            let mid = Math.floor((low + high) / 2);
            if(matrix[mid][0] <= target && matrix[mid][matrix[mid].length-1] >= target) {
                return mid;
            }

            if (matrix[mid][0] < target && matrix[mid][matrix[mid].length-1] < target) {
                low = mid + 1;
            }

            if (matrix[mid][0] > target) {
                high = mid - 1;
            }
        }
        
        return low;
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

/*
Runtime: 128 ms, faster than 5.13% of JavaScript online submissions for Search a 2D Matrix.
Memory Usage: 42.5 MB, less than 27.48% of JavaScript online submissions for Search a 2D Matrix.
 */