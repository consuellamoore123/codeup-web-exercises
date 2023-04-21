"use strict";


var str = ""
$(document).on("keyup", function(e){
    str = str + e.keyCode
    console.log(e.keyCode);
    if (str === "3838404037393739666513"){
        $('body').css('background-color', 'pink')
        alert("You have added 30 lives!");
    }
});


"use Strict"


$(document).ready(function() {
    var words = ["javascript", "jquery", "html", "css", "python", "react", "keyup", "bootstrap", "coding"];
    var word = words[Math.floor(Math.random() * words.length)];
    var hiddenWord = "";
    var remainingGuesses = 10;

    for (var i = 0; i < word.length; i++) {
        hiddenWord += "_";
    }

    $("#word").text(hiddenWord);
    $("#guesses").text("Remaining Guesses: " + remainingGuesses);

    for (var i = 65; i <= 90; i++) {
        var letter = String.fromCharCode(i);
        var button = $("<button>" + letter + "</button>");
        button.click(function() {
            var guess = $(this).text().toLowerCase();
            var index = word.indexOf(guess);
            if (index >= 0) {
                hiddenWord = hiddenWord.substr(0, index) + guess + hiddenWord.substr(index + 1);
                $("#word").text(hiddenWord);
                if (hiddenWord == word) {
                    $("#result").text("You Win!");
                }
            } else {
                remainingGuesses--;
                $("#guesses").text("Remaining Guesses: " + remainingGuesses);
                if (remainingGuesses == 0) {
                    $("#result").text("You Lose! The word was " + word + ".");
                }
            }
            $(this).attributes("disabled", true);
        });
        $("#buttons").append(button);
    }
});

"use strict"
$(document).ready(function() {
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");



//Create the wheel and add colors

var colors = ["red", "blue", "yellow", "orange", "green", "purple", "pink", "lime"];
var segments = ["Prize 1", "Prize 2", "Prize 3", "Prize 4", "Prize 5", "Prize 6", "Prize 7", "Prize 8"];
var startAngle = 0;
var arc = Math.PI / 4;
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
var radius = 200;

for (var i = 0; i < segments.length; i++) {
    var angle = startAngle + i * arc;
    context.beginPath();
    context.fillStyle = colors[i % colors.length];
    context.moveTo(centerX, centerY);
    context.arc(centerX, centerY, radius, angle, angle + arc, false);
    context.lineTo(centerX, centerY);
    context.fill();
    context.save();

    // Add the segment text here
}
for (var i = 0; i < segments.length; i++) {
    var angle = startAngle + i * arc;
    context.beginPath();
    context.fillStyle = colors[i % colors.length];
    context.moveTo(centerX, centerY);
    context.arc(centerX, centerY, radius, angle, angle + arc, false);
    context.lineTo(centerX, centerY);
    context.fill();
    context.save();

    // Add the segment text here
    context.fillStyle = "#FFFFFF";
    context.translate(centerX, centerY);
    context.rotate(angle + arc / 2);
    context.textAlign = "center";
    context.fillText(segments[i], radius / 2, 0);
    context.restore();
}

});

//Add a click event listener to the button that will spin the wheel using a random number generator. You can use the Math.random() method to generate a random number between 0 and 1, and then use the Math.floor() method to round down to the nearest integer. Multiply the random number