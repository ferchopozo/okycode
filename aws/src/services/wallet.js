'use strict';

const AWS = require('aws-sdk');
const stripeKey = process.env.STRIPE_KEY;
//const stripeKey = "sk_test_W6rurRsS9GBXUOv7QARxKzSo00k4XHzdHp";
const uuid = require('uuid')
AWS.config.update({region:'us-east-1'});
const stripe = require('stripe')(stripeKey);
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.get = async (event)  => { 
    const inputParameter = JSON.parse(event.body);
    //const inputParameter = event;
    const getData = async(params)=>{ return dynamoDb.scan(params).promise(); }

    if(stripeKey && inputParameter){
        console.log("Get Wallet of Customer");
            try{ 
                let params = {
                    TableName: "customer",
                    FilterExpression:'id = :p1',
                    ExpressionAttributeValues:{ ":p1":inputParameter.customerId}
                }
                const responsePayment =  await getData(params);
                
                if(responsePayment.Count > 0){
                        const cards = await stripe.customers.listSources(responsePayment.Items[0].paymentId,
                                                                         {object: 'card'});
                        console.log(cards);                                                 

                        return {
                            statusCode: 200,
                            headers: {
                            'Access-Control-Allow-Origin': '*',
                            'Access-Control-Allow-Methods': '*',
                            },
                            body: JSON.stringify({
                            message: {success: true, response: "success", object:cards.data},
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