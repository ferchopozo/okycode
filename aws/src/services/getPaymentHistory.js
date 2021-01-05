'use strict';

const AWS = require('aws-sdk');
const stripeKey = process.env.STRIPE_KEY;
//const stripeKey = "sk_test_W6rurRsS9GBXUOv7QARxKzSo00k4XHzdHp";
AWS.config.update({region:'us-east-1'});
const stripe = require('stripe')(stripeKey);
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.get = async (event)  => { 
    const inputParameter = JSON.parse(event.body);
    //const inputParameter = event;
    const getData = async(params)=>{ return dynamoDb.scan(params).promise(); }

    if(stripeKey && inputParameter){
        console.log("Start Process of Payment");
            try{                 
                if(inputParameter.customerId){        
                        let params = {
                            TableName: "payment",
                            FilterExpression:'customerId = :p1',
                            ExpressionAttributeValues:{ ":p1": inputParameter.customerId}
                        }

                        let responsePayments =  await getData(params);
                        console.log(responsePayments)

                        return {
                            statusCode: 200,
                            headers: {
                            'Access-Control-Allow-Origin': '*',
                            'Access-Control-Allow-Methods': '*',
                            },
                            body: JSON.stringify({
                            message: {success: true, response: "success", object: responsePayments.Items},
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
                              message: {success: false, response: "Customer is not correct"},
                            }),
                          }; 
                }      
            }catch(error){
                console.log('Error Token',error)
                return {
                    statusCode: 400,
                    headers: {
                      'Access-Control-Allow-Origin': '*',
                      'Access-Control-Allow-Methods': '*',
                    },
                    body: JSON.stringify({
                        message: {success: false, response: error},
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
              message: {success: false, response: "Payment is not configured"},
            }),
          }; 
    }
}


