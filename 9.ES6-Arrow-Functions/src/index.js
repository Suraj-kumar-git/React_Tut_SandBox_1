import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

// var numbers = [3, 56, 2, 48, 5];

////Map -Create a new array by doing something with each item in an array.
// const newNumbers = numbers.map(function (x) {
//   return x * x;
// });

     // Equivalent to the below arrow function
// const newNumber = numbers.map((x) => {
//   return x*x;
// })
// console.log(newNumber);

      // Equivalent to the below arrow function for two parameter
// const newNumber = numbers.map((x,y) => {
//   return x*y;
// })
// console.log(newNumber);     

    //Equivalent to the below arrow function for single parameter
// const newNumber = numbers.map(x => {
// return x*x;
// } )
// console.log(newNumber);

    //Equivalent to the below arrow function for more Shorter code
//  const newNumber = numbers.map(x => x*x);
//  console.log(newNumber);  


//////Filter - Create a new array by keeping the items that return true.
// const newNumbers = numbers.filter(function(num) {
//   return num < 10;
// });
//       <--* Using Arrow Function* -->
// const newNumbers = numbers.filter(num => num<10);
// console.log(newNumbers);


//Reduce - Accumulate a value by doing something to each item in an array.
// var newNumber = numbers.reduce(function (accumulator, currentNumber) {
//     return accumulator + currentNumber;
// })
//       <--* Using Arrow Function* -->
// var newNumber = numbers.reduce((accumulator, currentNumber) => (accumulator+currentNumber));
// console.log(newNumber);


////Find - find the first item that matches from an array.
// const newNumber = numbers.find(function (num) {
//   return num > 10;
// })
//       <--* Using Arrow Function* -->
// const newNumber = numbers.find(num => num>10);
// console.log(newNumber);


////FindIndex - find the index of the first item that matches.
// const newNumber = numbers.findIndex(function (num) {
//   return num > 10;
// })
//       <--* Using Arrow Function* -->
// const newNumber = numbers.findIndex(num => num > 10)
// console.log(newNumber);
