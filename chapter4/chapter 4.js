//CHAPTER 4
//EXERCISE 1
function reversearray(array) {
  let output = [];
  for (let i = array.length -1; i>=0; i--) {
   output.push(array[i]);
      
  }
  return output;
}
console.log(reversearray([2, 5, 6]));
