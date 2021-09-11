const http = require("http");

http.createServer((request, response) => {
    
    console.log("server started on port 4050");
    response.writeHead(200); //response ok

    const url = request.url;
    console.log(url);
    
    switch (url){
        case '/login':
            console.log(request.body);
            response.write('Welcome to the Login Page');
            break;
        case '/locations':
            response.write('List of dummy locations');
            break;
        case '/restaurants':
            response.write('List of dummy restaurants');
            break;
        case '/order':

            response.write('List of dummy order');
            break;
        default:
            response.write("Please send a valid request");

    }
    response.end(); //send info. back from the server

}).listen(4050); // http://localhost:4050

/* 
    nodemon

    -> enables the server to restart after any chnages we make
    -> npm i nodemon --save

    To run program:
    -> npm run start:nodemon 
        -> runs with nodemon
*/

/* 
    Postman

    -> it is a tool
    -> it is used to send request to the server and get the response
    -> to develop and test our APIs
*/
/*
    Verbs in APIs

    -> GET : to get the data from the server
    -> POST : to send the data to the server
*/
