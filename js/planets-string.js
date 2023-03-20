(function() {
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    var planetsArray = planetsString.split("|");
        console.log(planetsArray);



    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    var planets = "Mercury\nVenus\nEarth\nMars\nJupiter\nSaturn\nUranus\nNeptune";

        console.log(planets)


    // var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    // planetsString = planetsString.split('|');
    // planetsString.sort(function(){
    //    return 0.5 - Math.random()});
    //    var html = '<ul>';
    //
    //    for (var i=0; i < planetsString.length; i++) {
    //         html += '<li>' + planetsString[i] + '</li>';
    //    }
    //
    //    html += '</ul>'





})();
