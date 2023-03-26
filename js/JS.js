// "use strict";
//
// console.log('This is my js file');
// var mySchool = "codeup";
//
// console.log("MySchool is awesome!!");
// console.log(mySchool, "is awsome!");
//
// alert("Hey this is an Alert");
// var likePizza = confirm("Do you like Pizza?")
// console.log(likePizza);
//
// var bestToppings = prompt("What toppings do you like on your pizza?");
// //return a string
// console.log(bestToppings);
//
//
// var x = true
// function not(x) {
//         return !x
// }
// console.log(not(x));
//
//
// var y = false
// function isTrue(y){
//     if (y === true) {
//         return true
//     } else {
//         return false
//     }
// }
//
// console.log(isTrue(y));
//
// var b = false
// function isFalse(b){
//     if (b === false){
//         return true;
//     } else {
//         return false
//     }
// }
// console.log(isFalse(b));

// var a = 2
// var s = '2'
// var n = 2
// function addOne(a) {
//     if (a === n || s){
//         return a + 1;
//     }else {
//         return ('not a number or numberString');
//     }
//     }
//     console.log(addOne(2));
//
// var e = 5
// var even = e % 2
// function isEven(e){
//     if (e == 0){
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isEven(even));


// function isIdentical (d, v) {
//     if (d === v) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(isIdentical(4,4));


// function isEqual (x, y){
//     if (x == y){
//         return true
// } else {
//     return false
// }
// }
// console.log(isEqual(4, '6'));


// function or (x,y){
//     return x == 2 || y == 2
// }
// console.log(or(4, 4));

// function and (x,y){
//     return x == y && y == x
// }
// console.log(and(4,5));

// var i = 0;
//
// while (i < 10) {
//     console.log('while loop iteration #' + i);
//     i++;
// }


// var i = 10
// do {
//     console.log('while loop iteration #' + i);
//     i++
// }
// while (i < 10);

// for (var i = 0; i < 10; i++) {
//     console.log('for loop iteration #' + i);
// }

// for (var i = 0, j = 9; i < 10; i++, j--) {
//     console.log('for loop iteration #' + i + ', j = ' + j);
// }
//
// var numberToStopAt = 5;
//
// for (var i = 1; i < 100; i++) {
//
//     console.log('Loop counter is: ' + i);
//
//     if (i === numberToStopAt) {
//         console.log('We have reached the stopping point: break!');
//         // use the break keyword to exit from the while loop
//         break;
//         // nothing after the break will get processed
//         console.log('You will never see this line.');
//     }
// }
//
// 'use strict';
//
// for (var i = 1; i < 100; i++) {
//
//     if (i % 2 !== 0) {
//         // number isn't even
//         // odd numbers aren't as cool
//         // skip the rest of the loop and continue with the next iteration
//         continue;
//     }
//
//     console.log('Here is a lovely even number: ' + i);
//}
//}

// var waterbottle = {
//
//     size: 'large',
//     color: 'blue',
//     hasStraw: true,
//     brand: 'Yetti',
// }
//
// console.log(waterbottle.color);

//
// //1. Define a function named `isBoolean` that takes in a value
// //and returns a boolean if the argument
// //provided is a boolean value or not.
// var input = true
// function isBoolean(input){
//     return typeof input == "Boolean";
// }console.log(isBoolean(true))
//
//
// //Define a function named `isNotString` that accepts an input
// // and returns `true` or `false` based on whether an input is not a string.
// // Numeric strings will count as strings and should return `false`.
// var input = "Hi"
// function isNotString(input) {
//     return typeof input !== "String";
// }console.log(isNotString("hi"));
//
//
// //Define a function named `isString` that
// // takes in a value as an input and returns a boolean
// // if the input provided is a string or not.
// // Numeric strings will count as strings and should return true.
// var input = 1
// function isString(input) {
//     return typeof input == "String";
// }
// console.log(isString(1))
//
//
// //Define a function named `isEmptyString` that will return `true`
// // when passed an argument with the value of "", i.e. an empty string.
// // All other arguments should return false.
//
// var input = ""
//     function emptyString(input) {
//     return input === "";
// }
// console.log(emptyString(""))
//
//
// //Define a function named `isNotANumber` that accepts an input and
// // returns `true` or `false` based on whether an input is a non-numeric value or not.
// // Numbers as strings are not a number and should return true.
// var input = "hi"
//
//     function isNotANumber(input) {
//     return typeof input !== "Number";
// }
// console.log(isNotANumber("hi"))
//
//
// //Define a function named `isNegative` that accepts a number and
// // returns `true` or `false` based on whether the input is less than zero.
// var input = 3
//     function isNegative(input) {
//     return input < 0;
// }
// console.log(isNegative(3))
//
//
// // Define a function named `isPositive` that accepts an input and
// // returns `true` or `false` based on whether the input is above zero.
// // Any non-numeric input should return false.
// var input = -2
// function isPositive(input) {
//     return input > 0;
// }
// console.log(isPositive(-2));
//
// // Define a function named `isZero` that will return `true`
// // when passed an argument of the numeric value `0`, and
// // return `false` for all other arguments.
// var input = 4
//     function isZero(input) {
//     return input == 0;
// }
// console.log(isZero(4))
//
//
// // Define a function named `isArray` that takes in an input and
// // returns a boolean whether or not that input is an array or not.
//
//     var input = [1, 2, 3]
//     function isAnArray(input) {
//     return Array.isArray(input);
// }
//     console.log(isAnArray([1, 2, 3]));
//
//
// //Define a function named `upperCase` that takes in a single input.
// // If the input is not a string, return `false`. If the input is a non-numeric string,
// // then return it with all the letters capitalized.
// //
// // function upperCase(input) {
// //     if (isNotString()){
// //     return  false
// // }   else {
// //         return input.toUpperCase();
// //     }
// // }
// var input = "be"
// function upperCase(input){
//     if(typeof input != "string"){
//         return false
//     }else {
//         return input.toUpperCase();
//     }
// }
// console.log(upperCase("be"))



//Define a function named isANumber that takes in a value
// and returns true if the input is numeric or not.
// // Numeric strings are not considered as numbers and should return false.
// function isANumber (input) {
//     if (typeof input === "number") {
//         return true;
//     } else{
//         return false
//     }
//
// }
// isANumber
// Define a function named increment that takes in an input
// and adds 1 to it if the input is numeric.
// If the input is not numeric, then return false.

// var increment  = function (input) {
//     if(typeof input === "number") {
//         return input + 1
//     } else
//     {
//         return false
//     }
// }
//Define a function named decrement. If the provided input is numeric,
//the function should subtract 1 and return the result.
//If the input is not numeric, decrement should return false.

// var decrement  = function (input) {
//     if (typeof input === "number") {
//         return input - 1
//     } else{
//         return false
//     }
// }

// Define a function named parseNumber that parses (converts) a numeric String
// and returns it's ' + 'value as a number, the function should be able to decide
// if it should be parsing an Integer or a Float value.
//
// function parseNumber (input) {
//     return (parseInt(input) || parseFloat(input))
//
//
// }




// Write a function named add that takes in two inputs. If both inputs provided are numeric,
// add will return the sum of both inputs. If one or both inputs is not numeric,
// add should return false.

// function add (x, y) {
//     if (isNaN(x) || isNaN(y) || typeof x === "boolean" || typeof y === "boolean") {
//         return false;
//     } else if (x,y) {
//         var num1 = Number(x)
//         var num2 = Number(y)
//         return num1 + num2
//     }
// }


//Write a function named multiply that takes in two inputs.
// If both inputs provided are numeric,
// multiply returns the product of the first input multiplied by the second.
// If either or both inputs are not numeric, multiply should return false.
//
// function multiply (x, y) {
//     if (isNaN(x) || isNaN(y) || typeof x === "boolean" || typeof y === "boolean") {
//         return false;
//     } else if (x, y) {
//         var num1 = Number(x)
//         var num2 = Number(y)
//         return num1 * num2
//     }
// }

//Define a function named square. If the provided input is numeric,
// square should return the number multiplied by itself.
// If the input is not numeric, square, should return false.
//
// function square (input){
//     if(typeof input != "number"){
//         return false
//     } else {
//         return Math.pow(input,2)
//     }
// }

//Write a function named sumOfSquares that takes in two inputs.
// If both inputs are numeric, sumOfSquares should square each input
// and return the sum of them added together. For example,
// if we pass a and b then we should square a and add it to the square of b.
// If either or both inputs are not numeric, sumOfSquares should return false.
//
// function sumOfSquares(x, y) {
//     if (isNaN(x) || isNaN(y)){
//         return false
//     } else if (typeof x == "boolean" || typeof y == "boolean"){
//         return false
//     }
//     else{
//         return Math.pow(x, 2)  + Math.pow(y, 2);
//     }
// }

//Write a function named isPalindrome that takes in a single input.
// If the input is a numeric string, then return false. If the input is a string,
// then return true if the string is the same forwards as it is backwards.
// Return false if the string is different forwards from backwards.
// Ignore capitalization.

// function isPalindrome(input){
//     if (input == true) {
//         return input.split().reverse().join()
//     } else if (input.split().reverse().join() === input) {
//         return true
//     }else {
//         return false
//     }
// }


// Write a function named getHighestNumber that takes in 3 arguments.
// If all 3 inputs are numbers or numeric strings, then return the highest number.
// If any of the 3 inputs is missing or non-numeric, then return false.

// function getHighestNumber (x, y, z) {
//     if (typeof (x, y, z) != "number") {
//         return false
//     }else {
//         return Math.max(x, y, z)
//     }
// }



