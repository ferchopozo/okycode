let handler = require('../services/category');

handler.get( {}, //event
    {}, //content
    function(data,ss) {  //callback function with two arguments 
        console.log(data);
    });