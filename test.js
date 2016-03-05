'use strict';

const iterableobject = require('./index.js');

(() => {
    let testName = 'should throw error trying to create iterable from number';

    let errorThrown = false;
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

(() => {
    let testName = 'should throw error with correct message trying to create iterable from number';

    let errorThrown = false;
    try {
        iterableobject(0);
    } catch (e) {
        if (e.message == 'Cannot create an iterable from that type.') {
            errorThrown = true;
        }
    }

    if (!errorThrown) {
        throw new Error("FAIL: " + testName);
    }

    console.log("PASS: " + testName);
})();
