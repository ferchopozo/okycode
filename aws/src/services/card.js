'use strict';

const AWS = require('aws-sdk');
const stripeKey = process.env.STRIPE_KEY;
var uuid = require('uuid')
AWS.config.update({region:'us-east-1'});
const stripe = require('stripe')(stripeKey);
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.add = async (event)  => {
    const inputParameter = JSON.parse(event.body);
    //const inputParameter = event;
    const getData = async(params)=>{ return dynamoDb.scan(params).promise(); }
    const putData = async(params)=>{ return dynamoDb.put(params).promise(); }
    let params = null;
    if(stripeKey && inputParameter){
        console.log("Start Process of Add Card to a Customer");
        const customerId = inputParameter.customerId;
        let params = {
            TableName: "customer",
            FilterExpression:'id = :p1',
            ExpressionAttributeValues:{ ":p1":customerId}
        }

        let customer = await getData(params);

        if (customer.Count === 0){
            //Create customer in Payment Software
            let paymentCustomer = null;
            try{
                paymentCustomer = await stripe.customers.create({
                email: inputParameter.email,
                name: inputParameter.name + ' '+inputParameter.lastName});
            }catch{
                paymentCustomer = null;
            }
            //create in database
            if(paymentCustomer){
                params = {
                    TableName:"customer",
                    Item:{
                        "id": inputParameter.customerId,
                        "email": inputParameter.email,
                        "name": inputParameter.name,
                        "lastName": inputParameter.lastName,
                        "paymentId": paymentCustomer.id
                    }
                };
                customer =  await putData(params); 
            } 

        }else{
            //customer has card
            customer =  customer.Items[0];
        }

        //Im sure that we have customer
        if(customer){
            try{     
                const token = await stripe.tokens.create({
                            card: {
                            name: inputParameter.name,
                            number: inputParameter.number,
                            exp_month: inputParameter.month,
                            exp_year: inputParameter.year,
                            cvc: inputParameter.cvc,
                            address_zip: inputParameter.zipCode,
                            },
                });

                const card = await  stripe.customers.createSource(customer.paymentId,{ source: token.id });

                return {
                    statusCode: 200,
                    headers: {
                      'Access-Control-Allow-Origin': '*',
                      'Access-Control-Allow-Methods': '*',
                    },
                    body: JSON.stringify({
                      message: {success: true, response: "success", object: card },
                    }),
                }; 
          
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

module.exports.delete = async (event)  => {
      //const inputParameter = event;
     const inputParameter = JSON.parse(event.body);
     const getData = async(params)=>{ return dynamoDb.scan(params).promise(); }

     if(stripeKey && inputParameter){
        console.log("Start Process of Delete Card")
        let params = {
            TableName: "customer",
            FilterExpression:'id = :p1',
            ExpressionAttributeValues:{ ":p1": inputParameter.customerId}
        }

        let customer = await getData(params);

        if(customer.Count > 0){
            try{
                const deleted = await stripe.customers.deleteSource(
                    customer.Items[0].paymentId,
                    inputParameter.cardId
                );
                console.log(deleted)

                return {
                    statusCode: 200,
                    headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': '*',
                    },
                    body: JSON.stringify({
                    message: {success: true, response: "success"},
                    }),
                }; 
            }catch(error) {
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
                  message: {success: false, response: "Customer is not configured"},
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
              message: {success: false, response: "Delete is not configured"},
            }),
          }; 
    }
}