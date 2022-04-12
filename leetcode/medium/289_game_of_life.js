/*
According to Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

Any live cell with fewer than two live neighbors dies as if caused by under-population.
Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by over-population.
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously. Given the current state of the m x n grid board, return the next state.
*/

/*
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 var gameOfLife = function(board) {
    //var res = new Array[board.length][board[0].length];
    var res = Array2D(board.length,board[0].length);

    for(var i = 0; i < board.length; i++) {
        for(var j = 0; j < board[i].length; j++) {
            var status = board[i][j];
            res[i][j] = golHelper(board,i,j,status);
        }
    }
    
    for(var i = 0; i < board.length; i++) {
        for(var j = 0; j < board[i].length; j++) {
            board[i][j] = res[i][j];
        }
    }
    
};

var golHelper = function(board,a,b,check) {
    var total = 0;
    //if the cell exists, check in each of the 8 directions and get a total
    if(a > 0 && b > 0) {
        total += nw(board,a,b);
    }

    if(a > 0) {
        total += north(board,a,b);
    }

    if(a > 0 && b < board[a].length-1) {
        total += ne(board,a,b);
    }

    if(b < board[a].length-1) { 
        total += east(board,a,b);
    }

    if(a < board.length-1 && b < board[a].length-1) {
        total += se (board,a,b);
    }

    if(a < board.length-1) {
        total += south(board,a,b);
    }

    if (a < board.length-1 && b > 0) {
        total += sw(board,a,b);
    }

    if (b > 0) {
        total += west(board,a,b);
    }

    //return a value (0 or 1) based on the total (rules of the game)
    if(check == 0 && total == 3) {
        return 1;
    }

    if(check == 1) {
        if(total < 2) {
            return 0;
        }else if(total > 3) {
            return 0;
        }else{
            return 1;
        }
    }
    
    return 0;
}

let Array2D = (r,c) => [...Array(r)].map(x=>Array(c).fill(0));

var nw = function(board,x,y) {
    return board[x-1][y-1];
}

var north = function(board,x,y) {
    return board[x-1][y];
}

var ne = function(board,x,y) {
    return board[x-1][y+1];
}

var east = function(board,x,y) {
    return board[x][y+1];
}

var se = function(board,x,y) {
    return board[x+1][y+1];
}

var south = function(board,x,y) {
    return board[x+1][y];
}

var sw = function(board,x,y) {
    return board[x+1][y-1];
}

var west = function(board,x,y) {
    return board[x][y-1];
}


/*
solution works but isnt being accepted on leetcode.. weirdly written test cases or badly worded prompt

Runtime: 62 ms, faster than 88.86% of JavaScript online submissions for Game of Life.
Memory Usage: 42.2 MB, less than 76.39% of JavaScript online submissions for Game of Life.
*/