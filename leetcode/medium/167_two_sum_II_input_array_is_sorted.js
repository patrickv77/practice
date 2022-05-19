/*
Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.
*/

/*
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(numbers, target) {
//     let l = 0, h = numbers.length-1;
//     while(numbers[h] > target) {
//         h--;
//     }

//     if(h === 1) return [1,2];

//     for(l; l < h; l++) {
//         for(let i = l+1; i <= h; i++) {
//             if(numbers[l] + numbers[i] === target){
//                 return [l+1,i+1];
//             }
//         }
//     }

//     return;
// };

// console.log(twoSum([1,2,3,4,7,11,12,13,14,15],9));

/*
21/21 test cases passed but took too long
*/

var twoSum = function(numbers, target) {
    let dict = {};
    for (i in numbers){
        if (target - numbers[i] in dict){
            return [dict[target - numbers[i]] + 1, Number(i) + 1];
        }
        dict[numbers[i]] = Number(i);
    }
};

/*
Runtime: 121 ms, faster than 10.59% of JavaScript online submissions for Two Sum II - Input Array Is Sorted.
Memory Usage: 45.7 MB, less than 5.62% of JavaScript online submissions for Two Sum II - Input Array Is Sorted.
*/