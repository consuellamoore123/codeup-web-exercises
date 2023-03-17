"use Strict"



function showMultiplicationTable(input) {
    var  number = 7;

    for (let i = 1; i <= 10; i++) {
        var results = 1 * number;
        console.log(`${number} * ${i} = ${results}`);
    }
}

showMultiplicationTable()


//${} literally identify what is inside the brackets
// var myName = 'Connie';
// var mySchool = 'codeup';
// console.log("Hi, I'm " + myName + " and I go to  " + mySchool); // Hi I'm Connie and I go to codeup
// console.log(`Hi I'm ${myName} and I go to ${mySchool} and 2 + 4 = ${2 + 4}`); //  Hi I'm Connie and I go to codeup // back ticks and ${} to wrap variables or js


for (var i = 0; i < 10; i++) {
    if(i % 2 !== 0) {
        console.log(i + 'is an odd number')
    } else if (i % 2 === 0) {
        console.log (i + 'is an even number')
        let random = Math.floor((Math.random() * 200 - 20)) + 20;
        console.log(i +random)
    }
}

for (var i = 0; i < 10; i++) {
    var str = "";
    for (var a = 0; a < i; a++){
        str = str + i;
    }
    console.log(str);
}

for(var i = 100; i >= 5; i -=5){
    console.log(i)
}









