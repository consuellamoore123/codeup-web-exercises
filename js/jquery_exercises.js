"use strict";
// $(function() {
//  alert( 'The DOM has finished loading!' );
// });
//
//  var content = $("#item-1").text();
//  alert(content);
//
// $('.para').css('border', '1px solid red');

// $('.list').css('font-size', '20px');
//
// // $('h1').css('background-color', 'yellow');
// // $('p').css('background-color', 'yellow');
// // $('li').css('background-color', 'yellow');
//
//
// $('h1, p, li').css('background-color', 'yellow');

// $('#codeup').hover(
//     function() {
//
//     },
//     function() {
//         $(this).css('background-color', '#FFF');
//     }
// );

$('h1').click(function() {
    $('h1').css('background-color', 'yellow');
});

$('p').dblclick(function(e) {
    $('p').css('font-size', '18px');
});


$('.item-list').hover(
    function() {
        $('.item-list').css('color', 'red');
    },
    function() {
        $('.item-list').css('color', 'black');
    }
);
