"use strict"
console.log('Hello from external JavaScript');
alert('welcome to my website!');
var userInput = prompt('what is your favorite color?');
console.log(userInput + " is my favorite color too!");

//You have rented some movies for your kids: T
// he little mermaid (for 3 days), Brother Bear (for 5 days, if they love it),
// and Hercules (1 day, you don't know yet if they're going to like it).
// If price for a movie per day is $3, how much will you have to pay?

var userInput = prompt('How many movie are you renting?');
console.log('user entered: ' + userInput);
var userOwes = userInput * 3;
alert('that will be ' + userOwes + ' dollars a night');
console.log('user owes $ ' + userOwes);
var userTotal = userOwes + prompt('How many nights');
alert("your total is $" + userTotal)
console.log(userTotal);

//Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook,
// they pay you a different rate per hour.
// Google pays $400, Amazon $380, and Facebook $350.
// How much will you receive in payment for this week?
// You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

var google = 400;
var amazon = 380;
var facebook = 350;
var userInput = prompt('Which company did you work for?');
console.log(userInput);
var userHours = prompt('How many hours did you work?');
console.log('user worked' + userHours + ' hours');
if (userInput === 'Facebook') {
    alert ('Thank you, you earned $' + userHours * 350);
}
if(userInput === 'Google') {
    alert('Thank you, you earned $' + userHours * 400);
}
if (userInput === 'Amazon') {
    alert('Thank you, you earned $' + userHours * 380);
}

//A student can be enrolled in a class only if the class is not full
// and the class schedule does not conflict with her current schedule.

var userInput = prompt('Which class will you be taking?');
console.log('userInput');
if (userInput === ('Math')
alert('Sorry, but class is not full && class does not conflict with schedule');
var English = ('class is full && class conflicts with schedule');


