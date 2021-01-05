'use strict';

const AWS = require('aws-sdk');
AWS.config.update({region:'us-east-1'});
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.get = async (event)  => {
  console.log("Start Process of Get One Services");
  const inputParameter = JSON.parse(event.body);
  
  if (inputParameter.serviceId ){
      const params = {
        TableName: "service",
        FilterExpression:'id = :p1 and isPublished = :p2',
        ExpressionAttributeValues:{ ":p1" : inputParameter.serviceId,
                                    ":p2" : true}
      }

      const getData = async()=>{ return dynamoDb.scan(params).promise(); }
      const items = await getData();
    
      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': '*',
        },
        body: JSON.stringify({
          message: items.Count > 0?items.Items[0]: {},
        }),
      }; 
  }else{
    return {
      statusCode: 400,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
      },
      body: JSON.stringify({
        message: "Id service is required",
      }),
    }; 
  }

};
