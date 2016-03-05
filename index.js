(function(mod) {
    mod.exports = function (obj) {
        if (obj === undefined || obj === null || typeof obj !== 'object') {
            throw new Error('Cannot create an iterable from that type.');
        }

        var keys = Object.keys(obj);
        var nextIndex = 0;

        obj[Symbol.iterator] = function () {
            return {
                next: function () {
                    if (nextIndex < keys.length) {
                        return {
                            value: obj[keys[nextIndex++]],
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

        return obj;
    };
})(module);
