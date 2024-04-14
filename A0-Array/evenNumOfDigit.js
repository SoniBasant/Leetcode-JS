
// Given an array nums of integers, return how 
// many of them contain an even number of digits.

// INPUTS ARE AT THE BOTTOM


// version 3
// concise version of v2

var evenDigit = function(num) {
  let count = 0;
  while(num) {
    count++;
    num = Math.floor(num/=10);
  }
  return count % 2 == 0;
}
var findNumbers = function(nums) {
  let evenDigitsCounter = 0;
  for(let num of nums) {
    if(evenDigit(num)) 
      evenDigitsCounter++;
  }
  return evenDigitsCounter;
};

// In while loop, dont need to check if num > 0 or not
// because 0 return false, so condition of
// while become false when condition return false

// no need to use if-else code for evenDigitsCounter
// because what we are doing is to return true
// when condition is true and return false
// when condition is false. so just return when true


// --------------------------------------------------------
// version 2
// var evenDigit = function(num) {
//   let count = 0;
//   while(num > 0) {
//     count++;
//     num = Math.floor(num/=10);
//   }
//   if (count%2==0){
//     return true
//   } else {
//     return false
//   }
// }
// var findNumbers = function(nums) {
//   let evenDigitsCounter = 0;
//   for(let num of nums) {
//     if(evenDigit(num)) {
//       evenDigitsCounter++;
//     }
//   }
//   return evenDigitsCounter;
// };

// --------------------------------------------------------
// version 1
// using contraints given in the question

// var findNumbers = function(nums) {
//   let count = 0;
//   for(let num of nums) {
//     if((num >= 10 && num <= 99) || (num >= 1000 && num <= 9999) || (num == 100000)) {
//       count++
//     }
//   }
//   return count
// };

// --------------------------------------------------------
// INPUTS
// var nums = [12,345,2,6,7896]
var nums = [12]
// var nums = [555,901,482,1771]
var result = findNumbers(nums)
console.log(result);