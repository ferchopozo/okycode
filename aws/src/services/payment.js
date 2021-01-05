'use strict';

const AWS = require('aws-sdk');
const stripeKey = process.env.STRIPE_KEY;
//const stripeKey = "sk_test_W6rurRsS9GBXUOv7QARxKzSo00k4XHzdHp";
const uuid = require('uuid')
AWS.config.update({region:'us-east-1'});
const stripe = require('stripe')(stripeKey);
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.payment = async (event)  => { 
    const inputParameter = JSON.parse(event.body);
    //const inputParameter = event;
    const putData = async(params)=>{ return dynamoDb.put(params).promise(); }
    const getData = async(params)=>{ return dynamoDb.scan(params).promise(); }

    if(stripeKey && inputParameter){
        console.log("Start Process of Payment");
            try{ 
                let params = {
                    TableName: "customer",
                    FilterExpression:'id = :p1',
                    ExpressionAttributeValues:{ ":p1":inputParameter.customerId}
                }
                let responseCustomer =  await getData(params);
                
                if(responseCustomer.Count > 0){

                        const card = await stripe.customers.retrieveSource(responseCustomer.Items[0].paymentId,  inputParameter.card);
                        console.log(card)

                        if(card) {
                                console.log("Card")
                                const paymentIntent = await stripe.paymentIntents.create({
                                    amount: (inputParameter.amount*100),
                                    currency: 'usd',
                                    customer: responseCustomer.Items[0].paymentId,
                                    payment_method: inputParameter.card,
                                    payment_method_types: ['card'],
                                });


                                const paymentId = uuid.v4();
                                const paymentDate = new Date();
                                

                                params = {
                                    TableName:"payment",
                                    Item:{
                                        "id": paymentId,
                                        "amount" : inputParameter.amount,
                                        "currency": "usd",
                                        "customerId": responseCustomer.Items[0].id,
                                        "paymentIntent": paymentIntent.id,
                                        "paymentMethod": paymentIntent.payment_method,
                                        "cardId": inputParameter.card,
                                        "cardBrand": card.brand,
                                        "cardNumber": card.last4,
                                        "cardName": card.name,
                                        "statusPayment": "P",
                                        "dateCreated": paymentDate.toISOString()
                                    }
                                };
                                const payment = await putData(params)
                               

                                return {
                                    statusCode: 200,
                                    headers: {
                                    'Access-Control-Allow-Origin': '*',
                                    'Access-Control-Allow-Methods': '*',
                                    },
                                    body: JSON.stringify({
                                    message: {success: true, response: "success", object: paymentId},
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
                                  message: {success: false, response: "Card is not correct"},
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
