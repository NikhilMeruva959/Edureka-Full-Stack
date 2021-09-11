//import the required packages
const express = require('express'); //importing express
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//import the routes
const routes = require('./Routes/index');

//intialize the libraries
const app = express();
app.use(bodyParser.json());
const port = 5821;

// handle the CORS (cross origin resource sharing)
app.use((request, response, next) => {
    response.setHeader('Acess-Control-Allow-Origin', '*'); //backend server will only allow incoming request from this localstorage 
    response.setHeader('Acess-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); //whatever methods you want to allow
    response.setHeader('Acess-Control-Allow-Headers', 'Content-Type, Authorization'); //allowing what all headers in the incoming request will be there and be accepted in the backend server
    next(); // need to include next or else middleware will terminate
    //next() will continue on to the next middleware
});

//use the routes
app.use('/api', routes);

//connect to mongodb
mongoose.connect(
    'mongodb+srv://appDeveloper:Apple@cluster1.shhey.mongodb.net/zomato?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(success => {
    console.log("Connected to mongodb!");
    //start the server
    app.listen(port, () => {
        console.log('Server is running on port: ' + port);
    });
}).catch(error => {
    console.log("Error in Connection " + error);
});

//start the server