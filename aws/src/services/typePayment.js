'use strict';

const AWS = require('aws-sdk');
AWS.config.update({region:'us-east-1'});
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.get = async (event)  => {
  console.log("Start Process of Get Categories");
  const params = {
        TableName: "typePayment"
  }
  const getData = async()=>{ return dynamoDb.scan(params).promise(); }
  const data = await getData();

  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
    },
    body: JSON.stringify({
      message: data.Items.sort((a,b) => (a.order > b.order) ? 1 : ((b.order > a.order) ? -1 : 0))
    }),
  }; 

  return response;
};


