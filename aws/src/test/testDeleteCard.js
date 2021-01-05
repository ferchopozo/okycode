let handler = require('../services/card');

handler.delete( {
    "customerId": "34bcaeeb-6fd8-4edd-b92f-4bf49045f279",
    "cardId": "card_1HPVSZATmbsLuqkefIzlCxpd"
  }, //event
    {}, //content
    function(data,ss) {  //callback function with two arguments 
        console.log(data);
    });