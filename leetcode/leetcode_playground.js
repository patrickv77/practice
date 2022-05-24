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

// var convert = function(s, numRows) {
//     if(numRows == 1){
//         return s;
//     }

//     let arr = s.split("");
//     let matrix = [];

//     //init the grid matrix
//     for (let i = 0; i < numRows; i++) {
//         matrix[i] = []; 
//     }

//     let columnItr = 0, rowItr = 0;
//     for(let i = 0; i < arr.length; i++) {
//         if(rowItr == 0) {
//             while(rowItr < numRows && i < arr.length){
//                 matrix[rowItr][columnItr] = arr[i];
//                 rowItr++;
//                 i++;
//             }
//             columnItr++;
//             i--;
//             rowItr -= 2;
//         }else{
//             matrix[rowItr][columnItr] = arr[i];
//             rowItr--;
//             columnItr++;
//         }
//     }

//     let res = "";
//     for(let i = 0; i < matrix.length; i++) {
//         for(let j = 0; j < matrix[i].length; j++) {
//             if(matrix[i][j] != undefined) {
//                 res += matrix[i][j];
//             }
//         }
//     }

//     return res;
// };

// console.log(convert("PAYPALISHIRING",4));

// let k = 3;
// let nums = [1,2,3,4,5,6,7];

// k = k%nums.length;
// const indexFromEnd = nums.length - k;

// let arrRight = nums.slice(0, indexFromEnd), arrLeft = nums.slice(indexFromEnd);

// console.log(arrLeft.concat(arrRight));

// var rotate = function(nums, k) {
//     //modulo k by nums.length, if you rotate k nums.length times, you get the same array
//     k = k%nums.length;
//     const indexFromEnd = nums.length - k;

//     let arrRight = nums.slice(0, indexFromEnd), arrLeft = nums.slice(indexFromEnd);

//     console.log(arrLeft);
//     console.log(arrRight);

//     return arrLeft.concat(arrRight);
// };

// console.log(rotate([1,2,3,4,5,6,7],3));

// let arr = [1,2,3,4,5,6,7];

// arr.push(arr.splice(2,1)[0]);
// console.log(arr);

// const moveZeroes = nums => {
//     let i = 0,  j = 0;
//     while (i < nums.length) {
//       if (nums[i] != 0) {
//           if (i!==j) {
//               nums[j] = nums[i];
//               nums[i] = 0;
//           }
//         j++;
//       }  
//       i++;
//     }
//     return nums;
//   };

// console.log(moveZeroes([0,0,0,1,2,3,0,0,0,4,5,0,0,0,0,0,0]));

// let arr = [];
// let arr1 = [[1,3,5,7],[10,11,16,20],[23,30,34,60]];

// arr = arr.concat(arr1[0]);
// arr = arr.concat(arr1[1]);
// arr = arr.concat(arr1[2]);


// console.log(arr);

const hm = new Map();

hm.set("a",1);
hm.set("b",2);
hm.set("c",2);
hm.set("d",1);
hm.set("e",3);
hm.set("f",44);
hm.set("g",5);
hm.set("h",1);

const hmItr = hm.keys();

let temp = hmItr.next().value;
while(temp != undefined) {
    console.log(temp);
    temp = hmItr.next().value;
}

