// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var objString;
  var type = typeof obj;

  if (type === 'string') {
    return '"' + obj + '"';
  }
  //Check to see if Object
  if (type === 'object' && obj !== null) {
    //Array Case
    if (Array.isArray(obj)) {
      if (obj.length === 0) {
        return '[]';
      }
      objString = '[';
      for (var i = 0; i < obj.length; i++) {
        if (i === obj.length - 1) {
          objString += stringifyJSON(obj[i]);
        }
        else {
          objString += stringifyJSON(obj[i]) + ',';
        }
      }
      return objString + ']';
    }

    //Object Case
    if (Object.keys(obj).length === 0) {
      return '{}';
    }
    objString = '{';
    for (var key in obj) {
      if (obj[key] !== undefined && typeof obj[key] !== 'function') {
        if (Object.keys(obj).indexOf(key) === Object.keys(obj).length - 1) {
          objString += stringifyJSON(key) + ':' + stringifyJSON(obj[key]);
        }
        else {
          objString += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
        }
      }
    }
    return objString + '}';
  }


  //works for number, null, boolean (true/false)
  return '' + obj;
};
