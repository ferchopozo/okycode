let handler = require('../services/getPaymentHistory');

handler.get( {
   "customerId" : "34bcaeeb-6fd8-4edd-b92f-4bf49045f279",
  }
  , //event
    {}, //content
    function(data,ss) {  //callback function with two arguments 
        console.log(data);
    });