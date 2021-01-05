let handler = require('../services/card');

handler.add( {
    "customerId": "34bcaeeb-6fd8-4edd-b92f-4bf49045f279",
    "email": "ferchop2002@hotmail.com",
    "name": "Fernando",
    "lastName": "Pozo",
    "number": "4242424242424242",
    "month": "03",
    "year": "25",
    "cvc": "334",
    "zipCode": "77075"
  }, //event
    {}, //content
    function(data,ss) {  //callback function with two arguments 
        console.log(data);
    });