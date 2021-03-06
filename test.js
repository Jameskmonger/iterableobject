'use strict';

const iterableobject = require('./index.js');
const isiterable = require('isiterable');
const objectequal = require('object-equal');

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

(() => {
    let testName = 'should throw error trying to create iterable from boolean';

    let errorThrown = false;
    try {
        iterableobject(false);
    } catch (e) {
        errorThrown = true;
    }

    if (!errorThrown) {
        throw new Error("FAIL: " + testName);
    }

    console.log("PASS: " + testName);
})();

(() => {
    let testName = 'should throw error with correct message trying to create iterable from boolean';

    let errorThrown = false;
    try {
        iterableobject(false);
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

(() => {
    let testName = 'should throw error trying to create iterable from null';

    let errorThrown = false;
    try {
        iterableobject(null);
    } catch (e) {
        errorThrown = true;
    }

    if (!errorThrown) {
        throw new Error("FAIL: " + testName);
    }

    console.log("PASS: " + testName);
})();

(() => {
    let testName = 'should throw error with correct message trying to create iterable from null';

    let errorThrown = false;
    try {
        iterableobject(null);
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

(() => {
    let testName = 'should throw error trying to create iterable from undefined';

    let errorThrown = false;
    try {
        iterableobject(undefined);
    } catch (e) {
        errorThrown = true;
    }

    if (!errorThrown) {
        throw new Error("FAIL: " + testName);
    }

    console.log("PASS: " + testName);
})();

(() => {
    let testName = 'should throw error with correct message trying to create iterable from undefined';

    let errorThrown = false;
    try {
        iterableobject(undefined);
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

(() => {
    let testName = 'should return iterable object';

    let obj = {
        firstKey: 3,
        secondKey: {
            value: 18
        }
    };

    let iterable = iterableobject(obj);

    if (!isiterable(iterable)) {
        throw new Error("FAIL: " + testName);
    }

    console.log("PASS: " + testName);
})();


(() => {
    let testName = 'should not modify original object';

    let obj = {
        firstKey: 3,
        secondKey: {
            value: 18
        }
    };

    let iterable = iterableobject(obj);

    if (isiterable(obj)) {
        throw new Error("FAIL: " + testName);
    }

    console.log("PASS: " + testName);
})();

(() => {
    let testName = 'first next() call should return first value';

    let firstValue = 3;
    let secondValue = {
        value: 18
    };

    let obj = {
        firstKey: firstValue,
        secondKey: secondValue
    };

    let iterable = iterableobject(obj);
    let iterator = iterable[Symbol.iterator]();

    let firstCall = iterator.next().value;

    if (firstCall !== firstValue) {
        throw new Error("FAIL: " + testName);
    }

    console.log("PASS: " + testName);
})();

(() => {
    let testName = 'second next() call should return second value';

    let firstValue = 3;
    let secondValue = {
        value: 18
    };

    let obj = {
        firstKey: firstValue,
        secondKey: secondValue
    };

    let iterable = iterableobject(obj);
    let iterator = iterable[Symbol.iterator]();

    let firstCall = iterator.next().value;
    let secondCall = iterator.next().value;

    if (!objectequal(secondCall, secondValue)) {
        throw new Error("FAIL: " + testName);
    }

    console.log("PASS: " + testName);
})();

(() => {
    let testName = 'readme armour example';

    let expectedOutput = 'Helmet of the Gods: An impressive helmet, believed to have come from another realm.Steel Shoes: A pair of heavy steel shoes. They glisten in the sunlight.';

    let armour = {
        helmet: {
            name: 'Helmet of the Gods',
            description: 'An impressive helmet, believed to have come from another realm.'
        },
        boots: {
            name: 'Steel Shoes',
            description: 'A pair of heavy steel shoes. They glisten in the sunlight.'
        }
    };

    let actualOutput = '';

    for (let part of iterableobject(armour)) {
        actualOutput = actualOutput += part.name + ": " + part.description;
    }

    if (actualOutput !== expectedOutput) {
        throw new Error("FAIL: " + testName);
    }

    console.log("PASS: " + testName);
})();


(() => {
    let testName = 'stays in sync with the object';

    let onlyKeyValue = 3;

    let obj = iterableobject({});
    obj['onlyKey'] = onlyKeyValue;

    let iterator = obj[Symbol.iterator]();
    let next = iterator.next();

    if (next.value !== onlyKeyValue) {
        throw new Error("FAIL: " + testName);
    }

    console.log("PASS: " + testName);
})();
