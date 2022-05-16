// var str = "1010101111";

// var a = str.charAt(str.length-1);

// var b = 15;

// console.log(b + parseInt(a));

// b%=2;
// console.log(b);

// var addBinary = function(a, b) {

//     if(a.length > b.length) {
//         b = b.padStart(a.length, "0");
//     }else{
//         a = a.padStart(b.length, "0");
//     }

//     var res = "";
//     var carry = 0;

//     for(var i = a.length-1; i >= 0; i--) {
//         var temp = parseInt(a.charAt(i)) + parseInt(b.charAt(i)) + carry;
//         if(temp > 1) {
//             carry = 1;
//             temp %= 2;
//             res = temp.toString() + res;
//         }else{
//             carry = 0;
//             res = temp.toString() + res;
//         }
//     }
//     if(carry == 1) {
//         res = "1" + res;
//     }

//     return res;
// };

// console.log(addBinary("1010", "1011"));

//expected: "10101"

//var a = "ABCECBA";

//for(var i = 0; i < parseInt(a.length/2); i++ ){
//     console.log(a.charAt(i));
//}

// var board = [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]];

// var getThreeByThree = function(board, startPoint){
//     var res = [];
//     for(i = startPoint[1]; i < startPoint[1]+3; i++) {
//         var tempArr = [];
//         for(j = startPoint[0]; j < startPoint[0]+3; j++) {
//             tempArr.push(board[i][j])
//         }
//         res.push(tempArr);
//     }
//     return res;
// };

// console.log(getThreeByThree(board,[3,6]));

var num = 123456;

var arr = Array.from(num.toString()).map(Number);

num=0;
arr.forEach(x => num += x);


console.log(num);

