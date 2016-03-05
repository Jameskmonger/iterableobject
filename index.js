(function(mod) {
    mod.exports = function (obj) {
        if (typeof obj !== 'object') {
            throw new Error('Cannot create an iterable from that type.');
        }

        throw new Error("not implemented");
    };
})(module);
