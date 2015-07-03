// returns keys of either an object or an array of objects
// TODO: add a check for when an array which may contain at least one non-object
var getKeys = function (obj) {
  if (typeof obj === 'object' && !Array.isArray(obj)) {
    return Object.keys(obj);
  } else if (Array.isArray(obj)) {
    var arrayOfObjects = obj;
    var keysOfOneObject = [];
    var keysOfAllObjects = [];
    for (var i = 0; i < arrayOfObjects.length; i++) {
      keysOfOneObject = Object.keys(arrayOfObjects[i]);
      for (var j = 0; j < keysOfOneObject.length; j++) {
        if (keysOfAllObjects.indexOf(keysOfOneObject[j]) === - 1) {
          keysOfAllObjects.push(keysOfOneObject[j]);
        }
      }
    }
    return keysOfAllObjects;
  } else {
    console.log('cannot getKeys of type ' + typeof obj);
  }
  return -1;
};
