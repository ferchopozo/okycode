'use strict';

const AWS = require('aws-sdk');
AWS.config.update({region:'us-east-1'});
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.get = async (event)  => {
  console.log("Start Process of Get Services");
  const inputParameter = JSON.parse(event.body);
  
  if (inputParameter.category ){
      const paramService = {
        TableName: "service",
        FilterExpression:'categoryId = :p1 and isPublished = :p2',
        ExpressionAttributeValues:{ ":p1" : inputParameter.category,
                                    ":p2" : true}
      }
      const paramCategory = {
        TableName: "category",
        FilterExpression:'id = :p1 and isPublished = :p2',
        ExpressionAttributeValues:{ ":p1" : inputParameter.category,
                                    ":p2" : true}
      }
      
      const getServices = async()=>{ return dynamoDb.scan(paramService).promise(); }
      const getCategory = async()=>{ return dynamoDb.scan(paramCategory).promise(); }
      const itemServices = await getServices();
      const itemCategory = await getCategory();
    
      if(itemCategory && itemCategory.Count > 0){  
          return {
            statusCode: 200,
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods': '*',
            },
            body: JSON.stringify({
              message: {services:itemServices.Items,
                        category: itemCategory.Items[0]},
            }),
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

