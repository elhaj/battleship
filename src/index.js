const AWS = require('aws-sdk');

exports.handler = (event, ctx, callback) => {
    var params = {
        TableName: 'Test',
        Key: {
            Id: '1'
        }
    };
    var documentClient = new AWS.DynamoDB.DocumentClient();

    documentClient.get(params, function (err, data) {
        if (err) console.log(err);
        else callback(undefined, data);
    });
};
