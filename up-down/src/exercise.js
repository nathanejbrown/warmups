// Up Down: Given an array of numbers, write a program that describes whether each number was higher, lower or even to the previous number.
//
// Input: An array of numbers (e.g [6,3,5,4,3,4,4,5])
//
// Output: An array of up down strings (e.g. ["down","up","down","down","up","even","up"])

array = [6,3,5,4,3,4,4,5];

for (var i = 0; i < array.length; i++) {
  if (array[i + 1] > array[i]) {
    array[i] = 'Up';
  }
  else if (array[i + 1] < array[i]) {
    array[i] = 'Down';
  }
  else if (array[i] === array[i + 1]) {
    array[i] = 'Even';
  }
  else array.pop();
}
console.log(array);


// Starting a new project:
//
// 1. Create a new directory
// 1. CD into the directory
// 1. Install linter generator - yo galvanize-linter
// 1. Install dependencies - npm i
// 1. Run linter - gulp
// 1. Add new code to '/src' directory
//
// ```sh
// $ mkdir NEW_PROJECT_NAME && CD NEW_PROJECT_NAME
// $ yo galvanize-linter
// $ npm i
// $ git init
// $ gulp
// ```
