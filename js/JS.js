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