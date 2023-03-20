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

var waterbottle = {

    size: 'large',
    color: 'blue',
    hasStraw: true,
    brand: 'Yetti',
}

console.log(waterbottle.color);



