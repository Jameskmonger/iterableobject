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
