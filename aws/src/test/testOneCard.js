let handler = require('../services/getPayment');

handler.get( {
    "paymentId": "188108a2-b394-4cba-81f9-c0147f2babea"
  }, //event
    {}, //content
    function(data,ss) {  //callback function with two arguments 
        console.log(data);
    });