"use strict"

// var random = Math.floor((Math.random()*50)+1);

var input = prompt("Please provide an odd number");
console.log(input)




for(var i = 1; i < 50; i++) {
    if (i % 2 === 0) {
        continue
    }
    if (i == input){
        console.log("Yikes! Skipping number: " + i);
        continue
    }
    else {
        console.log("Here is an Odd number:" + i)
    }
    if (i>49){
        break
    }
}
