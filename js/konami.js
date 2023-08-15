"use strict";
$(document).ready(function () {
    var str = "";
    $(document).on("keyup", function (e) {
        str = str + e.keyCode;
        console.log(e.keyCode);
        if (str === "38384040373937396665") {
            $('body').css('background-color', 'indigo');
            alert("You have added 30 lives!");
        }
    });
});


