// reusuable method to
// custom-sort an array of objects
var sortByKey = function (arr, key, direction) {
  var lowToHigh = function (a, b) {
    if (a[key] > b[key]) {
      return 1;
    }
    if (a[key] < b[key]) {
      return - 1;
    }
    else {
      return 0;
    }
  };
  var highToLow = function (a, b) {
    if (a[key] < b[key]) {
      return 1;
    }
    if (a[key] > b[key]) {
      return - 1;
    }
    else {
      return 0;
    }
  };
  if (direction === 1 || direction === 'lowToHigh') {
    return arr.sort(lowToHigh);
  } else if (direction === - 1 || direction === 'highToLow') {
    return arr.sort(highToLow);
  }
  // default
  else {
    return arr.sort(lowToHigh);
  }
};
// TODO: handle varied behavior between data types (strings, numbers, dates)
//       handle the absence of a key on a particular object in the array
//       options: sort by X, then by Y, then by Z
