'use strict';

const AWS = require('aws-sdk');
AWS.config.update({region:'us-east-1'});
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.get = async (event)  => {
  console.log("Start Process of Get Services By Slug");
  const inputParameter = JSON.parse(event.body);
  //const inputParameter = event;
  
  if (inputParameter.slug ){
      const paramService = {
        TableName: "service",
        FilterExpression:'parent = :p1 and isPublished = :p2',
        ExpressionAttributeValues:{ ":p1" : inputParameter.slug,
                                    ":p2" : true}
      }
      
      const getServices = async()=>{ return dynamoDb.scan(paramService).promise(); }
      const itemServices = await getServices();
    
      if(itemServices && itemServices.Count > 0){  
          return {
            statusCode: 200,
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods': '*',
            },
            body: JSON.stringify({
                  message: itemServices.Items 
            } )
          }; 
      }else{
        return {
          statusCode: 200,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': '*',
          },
          body: JSON.stringify({
            message: [],
          }),
        }; 
      }
  }else{
    return {
      statusCode: 400,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
      },
      body: JSON.stringify({
        message: "category is required",
      }),
    }; 
  }

};

