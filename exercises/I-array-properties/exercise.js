/*
  Array properites
  ----------------
  Complete the function to test if an array is empty (has no values in it)

*/
// This function test if the arry is empty or not 
function isEmpty(arr) {
  return ( arr.length === 0 ) ? true : false; // complete this statement
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
let numbers = [1, 2, 3];
let names = [];

console.log(isEmpty(numbers));
console.log(isEmpty(names));

/* 
  EXPECTED RESULT
  ---------------
  false
  true
*/
