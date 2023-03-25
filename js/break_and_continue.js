"use strict"

// var random = Math.floor((Math.random()*50)+1);

var input = prompt("Please provide an odd number");





for(var i = 1; i < 100; i++) {
    if (i % 2 === 0) {
        continue
    }
    if (i == input){
        continue
    }
    else {
        console.log("Here is an Odd number:" + i)
    }
    if (i>49){
        break
    }
}
