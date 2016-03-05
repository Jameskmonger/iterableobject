var iterableobject = require('./index.js');

(function() {
    var testName = 'should throw error trying to create iterable from number';

    var errorThrown = false;
    try {
        iterableobject(0);
    } catch (e) {
        errorThrown = true;
    }

    if (!errorThrown) {
        throw new Error("FAIL: " + testName);
    }

    console.log("PASS: " + testName);
})();
