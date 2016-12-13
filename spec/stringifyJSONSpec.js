// test cases are described in fixtures.js
describe('stringifyJSON', function() {
  it('should match the result of calling JSON.stringify', function() {

    stringifiableObjects.forEach(function(test) {
      var expected = JSON.stringify(test);
      var result = stringifyJSON(test);
      expect(result).to.equal(expected);
    });

    unstringifiableValues.forEach(function(obj) {
      var expected = JSON.stringify(obj);
      var result = stringifyJSON(obj);
      expect(result).to.equal(expected);
    });

  });

  for(var i = 0; i < stringifiableObjects.length; i++) {
    (function(i) {
      it('Individual test cases for JSON.stringify case: ' + stringifiableObjects[i], function() {
        var expected = JSON.stringify(stringifiableObjects[i]);
        var result = stringifyJSON(stringifiableObjects[i]);
        expect(result).to.equal(expected);
      });
    }(i));
  }

});
