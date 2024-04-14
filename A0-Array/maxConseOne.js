
// Given a binary array nums, return the maximum 
// number of consecutive 1's in the array.

// version 4
var findMaxConsecutiveOnes = function(nums) {
  let max=0
  let count=0
  for(let i=0; i<nums.length; i++){
    count = nums[i]==1 ? count+1 : 0
    max = Math.max(count, max)
  }
  return max 
}

var numArray = [0,1,1,0,1,1,1,0]
// var numArray = [1,0,1,1,0,1]
// var numArray = [1]
// var numArray = [0]
// var numArray = [0,0]
let myArray = findMaxConsecutiveOnes(numArray);
console.log(myArray);

// --------------------------------------------------------
// version 3
// var findMaxConsecutiveOnes = function(nums) {
//   let count = 0;
//   let countArr = [];
//   for(let i=0; i<nums.length; i++) {    
//       nums[i]==1 ?
//         `${count+=1}`
//       :
//         `${count=0}`
      
//       countArr.push(count)
//   }
//   return Math.max(...countArr)
// };

// --------------------------------------------------------
// version 2
// var findMaxConsecutiveOnes = function(nums) {
//   let count = 0;
//   let countArr = [];
//   for(i=0; i<nums.length; i++) {    
//       if(nums[i]==1) {
//         count+=1
//       } else {
//         count=0
//       }
//       countArr.push(count)
//   }
//   return Math.max(...countArr)
// };

// --------------------------------------------------------
// version 1
// if(nums.length > 1) {
//   if(nums[i]==1) {
//     count+=1
//     countArr.push(count)
//   } else {
//     count=0
//     countArr.push(count)
//   }
// } else {
//   if(nums[i]==1) {
//     count+=1
//     countArr.push(count)
//   } else {
//     count = 0
//     countArr.push(count)
//   }
// }
