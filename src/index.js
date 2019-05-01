const lodash = require('lodash');

exports.handler = (event, ctx, callback) => {
    console.log(lodash.chunk([1, 2, 3, 4], 2));
    callback(undefined, 1234);
};
