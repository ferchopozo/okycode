let handler = require('../services/confirmPayment');

handler.confirmPayment( {
   "paymentId" : "44bab950-9aa5-43c8-b254-0b3b4b58328f"
  }
  , //event
    {}, //content
    function(data,ss) {  //callback function with two arguments 
        console.log(data);
    });