const AWS = require('aws-sdk');

exports.handler = (event, ctx, callback) => {
    const id = event.pathParameters['ship-id'];
    const params = {
        TableName: 'Test',
        Key: {
            Id: id
        }
    };
    const documentClient = new AWS.DynamoDB.DocumentClient();

    documentClient.get(params, function (err, data) {
        if (err) console.log(err);

        const response = {
            "statusCode": 200,
            "body": JSON.stringify(data)
        };
        callback(undefined, response);
    });
};
