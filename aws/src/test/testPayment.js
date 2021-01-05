let handler = require('../services/payment');

handler.payment( {
   "amount" : 200,
   "customerId": "34bcaeeb-6fd8-4edd-b92f-4bf49045f279",
   "card" : "card_1HSmtiATmbsLuqkeSh4NyUny",
   "description" : "Test Transaction"
  }
  , //event
    {}, //content
    function(data,ss) {  //callback function with two arguments 
        console.log(data);
    });