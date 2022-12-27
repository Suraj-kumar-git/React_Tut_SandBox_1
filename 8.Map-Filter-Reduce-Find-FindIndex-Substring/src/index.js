import emojipedia from "./emojipedia";
var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
// *Using forEach()
var newNumbers1 = [];
function double1(num) {
  newNumbers1.push(num * 2);
}
numbers.forEach(double1);

// *Using map()
var numbers2 = [3, 56, 2, 48, 5];
function double2(num) {
  return num * 2;
}
var newNumbers2 = numbers2.map(double2);
console.log(newNumbers2);

//* Calling anonymous function for both map() and forEach()
var numbers3 = [3, 56, 2, 48, 5];
var newNumbers3 = [];
numbers3.map(function (x) {
  newNumbers3.push(x * 2);
});
console.log(newNumbers3);

//        OR
var numbers4 = [3, 56, 2, 48, 5];
const newNumbers4 = numbers4.map(function (x) {
  return x * 2;
});
console.log(newNumbers4);

//        OR
var numbers5 = [3, 56, 2, 48, 5];
var newNumbers5 = [];
numbers5.forEach(function (x) {
  newNumbers5.push(x * 2);
});
console.log(newNumbers5);

//Filter - Create a new array by keeping the items that return true.
var numbers6 = [3, 56, 2, 48, 5];
const newNumbers6 = numbers6.filter(function (x) {
  return x < 10;
});
console.log(newNumbers6);
//        OR
var numbers7 = [3, 56, 2, 48, 5];
var newNumbers7 = [];
numbers7.forEach(function (x) {
  if (x < 10) {
    newNumbers7.push(x);
  }
});

//Reduce - Accumulate a value by doing something to each item in an array.
var numbers8 = [3, 56, 2, 48, 5];
var newNumber8 = numbers8.reduce(function (accumulator, currentNumber) {
  console.log("accumulator = " + accumulator);
  console.log("currentNumber = " + currentNumber);
  return accumulator + currentNumber;
});
console.log(newNumber8);

// Do understand the above anonymous function with two parameters.
// The two parameters are the first two values of the numbers[] for
// the first iteration & the accumulator gets updated with the result
// as return value and the currentNumber is always the next parameter.

var numbers9 = [3, 56, 2, 48, 5];
var newNumber9 = 0;
numbers9.forEach(function (currentNumber) {
  newNumber9 += currentNumber;
  console.log(newNumber9);
});
console.log(newNumber9);

//Find - find the first item that matches from an array.
var numbers10 = [3, 56, 2, 48, 5];
const newNumber10 = numbers10.find(function (num) {
  return num > 10;
});

console.log(newNumber10);
//FindIndex - find the index of the first item that matches.
var numbers11 = [3, 56, 2, 48, 5];
const newNumber11 = numbers11.findIndex(function (num) {
  return num > 10;
});
console.log(newNumber11);

//<--**/Challenge**-->
//From the emojipedia.js file extract only the meaning from each element
//with only 100 characters of it.

var meaning = [];
emojipedia.forEach(function (x) {
  meaning.push(x.meaning.substring(0, 100));
});
console.log(meaning);
//            OR
const newEmojipedia = emojipedia.map(function (emojiEntry) {
  return emojiEntry.meaning.substring(0, 100);
});
console.log(newEmojipedia);
