// Given a fixed-length integer array arr, duplicate 
// each occurrence of zero, shifting the remaining 
// elements to the right.

// Note that elements beyond the length of the 
// original array are not written. Do the above 
// modifications to the input array in place and 
// do not return anything.

// means> length of array will not change

// pseudo code
// get array length
// use loop on each array element
// if arr[i] == 0
// loop through each element from right and shift each ele to one place right
// add zero at arr[i+1] position

// INPUTS ARE AT THE BOTTOM
// --------------------------------------------------------
var duplicateZeros = function(arr) {
  // loop through array before the last ele. don't loop on last ele
  // becaz you don't want to add zero at last element as this 
  // will change the array length. We are
  for(let i = 0; i < arr.length-1; i++) {
    if(arr[i] == 0) {
      for(let j = arr.length-1; j>i; j--) {
        // shift to the right by one and ensure 
        // that array length does not change
        arr[j] = arr[j-1];
      }
      i++;
    }
  }
  return arr;
};
let InputArr = [1, 0, 2, 3, 0, 4, 5, 0]
// o/p > [1, 0, 0, 2, 3, 0, 0, 4]

// let InputArr = [1,2,3]
let result = duplicateZeros(InputArr)
console.log(result)