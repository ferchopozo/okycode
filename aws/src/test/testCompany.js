let handler = require('../services/company');

handler.get( {}, //event
    {}, //content
    function(data,ss) {  //callback function with two arguments 
        console.log(data);
    });