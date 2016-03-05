(function(mod) {
    var clone = require('clone');

    mod.exports = function (obj) {
        if (obj === undefined || obj === null || typeof obj !== 'object') {
            throw new Error('Cannot create an iterable from that type.');
        }

        var clonedObject = clone(obj);

        clonedObject[Symbol.iterator] = function () {
            var keys = Object.keys(clonedObject);
            var nextIndex = 0;
            
            return {
                next: function () {
                    if (nextIndex < keys.length) {
                        return {
                            value: clonedObject[keys[nextIndex++]],
                            done: false
                        };
                    }

                    return {
                        value: undefined,
                        done: true
                    };
                }
            }
        }

        return clonedObject;
    };
})(module);
