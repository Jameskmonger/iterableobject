# iterableobject

Create an [iterable](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Iteration_protocols) from a JavaScript object.

## Usage

Normally, you cannot iterate over a JavaScript object. This, for example, will give an error:

```javascript
var obj = {
    first: {
        name: 'one',
        number: 1
    },
    second: {
        name: 'two',
        number: 2
    }
};

var iterator = obj[Symbol.iterator](); // throws an error
```

Using `iterableobject`, you can create an object that can be iterated over and therefore can be used in `for...of` loops.

```javascript
var iterable = require('iterableobject');

var armour = {
    helmet: {
        name: 'Helmet of the Gods',
        description: 'An impressive helmet, believed to have come from another realm.'
    },
    boots: {
        name: 'Steel Shoes',
        description: 'A pair of heavy steel shoes. They glisten in the sunlight.'
    }
};

for (var part of iterable(armour)) {
    console.log(part.name + ": " + part.description);
}
```

The output of the above example will be the following:

> Helmet of the Gods: An impressive helmet, believed to have come from another realm.

> Steel Shoes: A pair of heavy steel shoes. They glisten in the sunlight.

## Development

You can execute the tests for this project by running `npm test`.

[isiterable](https://github.com/Jameskmonger/isiterable) and [object-equal](https://github.com/intesso/object-equal) have been used to make testing easier.

## license

[MIT](/LICENSE)
