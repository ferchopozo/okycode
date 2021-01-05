let handler = require('../services/service');

handler.get( {}, //event
    {}, //content
    function(data,ss) {  //callback function with two arguments 
        console.log(data);
    });