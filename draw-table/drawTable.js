var drawTable = function(arrayOfObjects) {
    'use strict';
    // getKeys is a custom function
    var arrayOfKeys = getKeys(arrayOfObjects);
    //arrayOfKeys.sort();

    var carryString = '';

    // start the table
    carryString += '<table>';

    // build the header row
    carryString += '<tr>';
    for (var i = 0; i < arrayOfKeys.length; i++) {
        carryString += '<th>' + arrayOfKeys[i] + '</th>';
    }
    carryString += '</tr>';

    // build each row
    for (var j = 0; j < arrayOfObjects.length; j++) {
        carryString += '<tr>';
        for (var k = 0; k < arrayOfKeys.length; k++) {
            carryString += '<td>' + (arrayOfObjects[j][arrayOfKeys[k]] || ' ') + '</td>';
        }
        carryString += '</tr>';
    }

    // close the table
    carryString += '</table>';

    // draw on the DOM
    document.getElementById('tableInject').innerHTML = carryString;
};
