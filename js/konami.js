"use strict";


    var str = ""
    $(document).on("keyup", function (e) {
        str = str + e.keyCode
        console.log(e.keyCode);
        if (str === "3838404037393739666513") {
            $('body').css('background-color', 'indigo')
            alert("You have added 30 lives!");

        }
    });
// // // Define an array of words to choose from
// //     var words = ["javascript", "jquery", "html", "css", "python", "ruby"];
// //
// // // Choose a random word
// //     var word = words[Math.floor(Math.random() * words.length)];
// //
// // // Define the initial state of the game
// //     var guesses = [];
// //     var lives = 10;
// //
// // // Display the word as underscores
// //     var displayWord = "";
// //     for (var i = 0; i < word.length; i++) {
// //         displayWord += "_";
// //     }
// //     $("#word").text(displayWord);
//
// // Handle key press events
// //     $(document).on("keypress", function (event) {
// //         // Get the pressed key
// //         var key = String.fromCharCode(event.which).toLowerCase();
// //
// //         // Check if the key has already been guessed
// //         if (guesses.indexOf(key) !== -1) {
// //             $("#message").text("You already guessed that letter.");
// //             return;
// //         }
// //
// //         // Add the key to the list of guesses
// //         guesses.push(key);
// //
// //         // Check if the key is in the word
// //         if (word.indexOf(key) !== -1) {
// //             // Update the displayed word with the guessed letter
// //             var newDisplayWord = "";
// //             for (var i = 0; i < word.length; i++) {
// //                 if (word[i] === key) {
// //                     newDisplayWord += key;
// //                 } else {
// //                     newDisplayWord += displayWord[i];
// //                 }
// //             }
// //             displayWord = newDisplayWord;
// //             $("#word").text(displayWord);
// //
// //             // Check if the word has been completely guessed
// //             if (displayWord.indexOf("_") === -1) {
// //                 $("#message").text("You win!");
// //                 return;
// //             }
// //         } else {
// //             // Decrement the remaining lives
// //             lives--;
// //             $("#message").text("Incorrect. You have " + lives + " lives remaining.");
// //
// //             // Check if the player has run out of lives
// //             if (lives === 0) {
// //                 $("#message").text("Game over. The word was '" + word + "'.");
// //                 return;
// //             }
// //         }
// //
// //         // Update the list of letters guessed
// //         $("#letters").text("Letters guessed: " + guesses.join(", "));
// //     });
//
//
// // //Create Wheel
//
//     // $(document).ready(function() {
//     //     function rotatePinwheel() {
//     //         $("#pinwheel").animate({deg: "+=360"}, {
//     //             duration: 2000,
//     //             step: function(now) {
//     //                 $(this).css({
//     //                     transform: "rotate(" + now + "deg)"
//     //                 });
//     //             },
//     //             complete: rotatePinwheel
//     //         });
//     //     }
//     //     rotatePinwheel();
//     // });
//
// $(document).ready(function() {
//     var canvas = document.getElementById("pinwheel");
//     var context = canvas.getContext("2d");
//     var centerX = canvas.width / 2;
//     var centerY = canvas.height / 2;
//     var radius = canvas.width / 2 - 10;
//     var angle = 2 * Math.PI / 8;
//     var colors = ["#ffc107", "#2196f3", "#4caf50", "#e91e63", "#9c27b0", "#ff5722", "#795548", "#607d8b"];
//
//     // Draw the pinwheel
//     for (var i = 0; i < 8; i++) {
//         var startAngle = i * angle;
//         var endAngle = startAngle + angle;
//         context.beginPath();
//         context.moveTo(centerX, centerY);
//         context.arc(centerX, centerY, radius, startAngle, endAngle);
//         context.closePath();
//         context.fillStyle = colors[i];
//         context.fill();
//     }
//
//     // Handle mouse click events
//     $("#pinwheel").click(function(e) {
//         var x = e.pageX - canvas.offsetLeft;
//         var y = e.pageY - canvas.offsetTop;
//         var angle = Math.atan2(y - centerY, x - centerX);
//         angle = angle < 0 ? angle + 2 * Math.PI : angle;
//         var sector = Math.floor(angle / (2 * Math.PI / 8));
//         var color = colors[sector];
//         $("body").css("background-color", color);
//     });
// });
