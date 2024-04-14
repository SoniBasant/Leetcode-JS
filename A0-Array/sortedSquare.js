
// Given an integer array "nums" sorted in non-decreasing 
// order, return an array of the squares of each number 
// sorted in non-decreasing order.

// INPUTS ARE AT THE BOTTOM


// version 3
// two pointers approach for O(n) complexity
// beats 93.5% solutions
var sortedSquares = function(nums) {
  const n = nums.length;
  let left = 0;
  let right = n - 1;
  const result = new Array(n);
  
  for (let i = n - 1; i >= 0; i--) {
    const leftSquare = nums[left] * nums[left];
    const rightSquare = nums[right] * nums[right];
    
    if (leftSquare > rightSquare) {
      result[i] = leftSquare;
      left++;
    } else {
      result[i] = rightSquare;
      right--;
    }
  } 
  return result;
};


// ------------------------------------------------------------
// version 2
// 
// var sortedSquares = function (nums) {
//   for(let i = 0; i<nums.length; i++) {
//     nums[i] = nums[i] * nums[i];
//     // nums[i] **=2;
//   }
//   return nums.sort((a, b) => a - b)
// }


// ------------------------------------------------------------
// version 1
// in this version we are making a new array
// which is NOT good for space complexity

// var sortedSquares = function(nums) {
//   let square = nums.map(n => n*n);
//   // use map to make a new array of squared values

//   return square.sort((a, b) => a - b);
//   // return sorted array which have asending values
// };


// ------------------------------------------------------------
// inputs
// let nums = [-4,-1,0,3,10];
let nums = [-7,-3,2,3,11];
let result = sortedSquares(nums)
console.log(result)