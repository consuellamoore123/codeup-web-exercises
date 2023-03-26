'use strict'


var i = 50
do  {
    i++

}
while (i<=100);
let allCones = Math.floor(Math.random() * 50) + 50;
console.log(allCones)


var i = 1
do {
    i++

}

while(i<=5);
let random =  Math.floor(Math.random() * 5) + 1;
let totalCones = 100
if (totalCones - allCones  > random) {
    console.log(random + ' cones sold')

}else if (totalCones - allCones < random) {
    console.log('Cannot sell you ' + (totalCones - allCones) + ' , I only have ' + random)
}

else {
    console.log('Yay, I sold them all')
}