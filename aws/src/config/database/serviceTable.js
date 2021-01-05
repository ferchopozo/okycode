'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB();

module.exports.createTable = () =>{
    let tableName = "service";
    let tableParams = {
        AttributeDefinitions: [
          {
            AttributeName: 'id',
            AttributeType: 'S'
          }
        ],
        KeySchema: [
          {
            AttributeName: 'id',
            KeyType: 'HASH'
          }
        ],
        ProvisionedThroughput: {
            ReadCapacityUnits: 5,
            WriteCapacityUnits: 5
          },
        TableName: tableName
    };

    console.log("Start Process of Creation Table");
    dynamoDb.createTable(tableParams, function(err, data) {
        if (err) {
          console.log("Error", err);
        } else {
          console.log(" Table Creation Successful", data);
        }
    });
}



