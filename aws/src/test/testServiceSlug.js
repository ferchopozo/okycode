let handler = require('../services/getServiceSlug');

handler.get( {"slug": "services"}, {}, 
    function(data,ss) {  //callback function with two arguments 
        console.log(data);
    });