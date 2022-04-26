/*
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
 */

/*
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    //check each horizontal
    for(var i = 0; i < board.length; i++) {
        var horizontalOK = checkLine(board[i]);
        if(!horizontalOK){
            console.log("horizontal not ok");
            return false;
        }
    }

    //check each vertical
    for(var i = 0; i < board[0].length; i++) {
        var tempArr = new Array(9);

        //populate tempArr to pass into checker method
        for(var j = 0; j < board.length; j++) {
            tempArr[j] = board[j][i];
        }

        var verticalOK = checkLine(tempArr);
        if(!verticalOK) {
            return false;
        }
    }

    //check 3x3s
    var startingCells = [[0,0],[3,0],[6,0],[0,3],[3,3],[6,3],[0,6],[3,6],[6,6]];
    for(var i = 0; i < startingCells.length; i++){
        //get a 3x3 from board using helper method
        var boxOK = checkThreeByThree(getThreeByThree(board, startingCells[i]));
        if(!boxOK) {
            return false;
        }
    }

    return true;
};

var checkLine = function(arr) {
    var checker = new Array(9);

    for(var i = 0; i < arr.length; i++) {
        if(arr[i] != '.'){
            if(checker[arr[i]-1] != 1) {
                checker[arr[i]-1] = 1;
            }else{
                
                return false;
            }
        }
    }

    return true;
};

var getThreeByThree = function(board, startPoint){
    var res = [];
    for(i = startPoint[1]; i < startPoint[1]+3; i++) {
        var tempArr = [];
        for(j = startPoint[0]; j < startPoint[0]+3; j++) {
            tempArr.push(board[i][j])
        }
        res.push(tempArr);
    }
    return res;
};

var checkThreeByThree = function(square) {
    var checker = new Array(9);

    for(var i = 0; i < square.length; i++) {
        for(var j = 0; j < square[i].length; j++){
            if(square[i][j] != '.') {
                if(checker[square[i][j]-1] != 1) {
                    checker[square[i][j]-1] = 1;
                }else{
                    return false;
                }
            }
        }
    }

    return true;
};

/*
Runtime: 134 ms, faster than 25.19% of JavaScript online submissions for Valid Sudoku.
Memory Usage: 46.6 MB, less than 37.11% of JavaScript online submissions for Valid Sudoku.
 */