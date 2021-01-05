'use strict';

const AWS = require('aws-sdk');
const stripeKey = process.env.STRIPE_KEY;
//const stripeKey = "sk_test_W6rurRsS9GBXUOv7QARxKzSo00k4XHzdHp";
const uuid = require('uuid')
AWS.config.update({region:'us-east-1'});
const stripe = require('stripe')(stripeKey);
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.confirmPayment = async (event)  => { 
    const inputParameter = JSON.parse(event.body);
    //const inputParameter = event;
    const updateData = async(params)=>{ return dynamoDb.update(params).promise(); }
    const getData = async(params)=>{ return dynamoDb.scan(params).promise(); }

    if(stripeKey && inputParameter){
        console.log("Start Process of Confirm of Payment");
            try{ 
                let params = {
                    TableName: "payment",
                    FilterExpression:'id = :p1',
                    ExpressionAttributeValues:{ ":p1":inputParameter.paymentId}
                }
                const responsePayment =  await getData(params);
                
                if(responsePayment.Count > 0){
                        const paymentIntent = await stripe.paymentIntents.confirm(
                                                    responsePayment.Items[0].paymentIntent,
                                                    {payment_method: responsePayment.Items[0].paymentMethod});

                        params = {
                            TableName:"payment",
                            Key: {
                            id : inputParameter.paymentId
                            },
                            UpdateExpression: "set statusPayment = :val, dateCreated = :val2 ",
                                ExpressionAttributeValues:{
                                    ":val": "C", 
                                    ":val2": (new Date()).toISOString()
                                },
                                ReturnValues:"UPDATED_NEW"
                        };

                        const payment = await updateData(params);

                        return {
                            statusCode: 200,
                            headers: {
                            'Access-Control-Allow-Origin': '*',
                            'Access-Control-Allow-Methods': '*',
                            },
                            body: JSON.stringify({
                            message: {success: true, response: "success", object:payment},
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
                          message: {success: false, response: "Payment is not correct"},
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