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
            $(this).attr("disabled", true);
        });
        $("#buttons").append(button);
    }
});


$(document).ready(function() {
    var angle = 45;
    $(this).each(function() {
        $(".pin").css("transform", "rotate(" + angle + "deg)");
        angle += 45;
    });
});