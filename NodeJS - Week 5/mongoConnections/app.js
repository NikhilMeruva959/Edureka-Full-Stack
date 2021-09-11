const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 6444;

mongoose.connect(
    //'mongmongodb://127.0.0.1:27017/', Commenting out local string because im connecting to mongodb cloud instance
    'mongodb+srv://appDeveloper:Apple@cluster1.shhey.mongodb.net/batch1?retryWrites=true&w=majority',
    {
        useNewUrlParser: true, //essentially use the latest changes in mongodb
        useUnifiedTopology: true
    } 
).then(success => {
    console.log("Connected to mongoDB");

    //If we are connected to mongoDB then only start up the server
    app.listen(port, () => {
        console.log('Server is running on port: ' + port);
    });
     
}).catch(error => {
    console.log("Error in Connection " + error);
});


/*
    To connect to the local instance of mongoDB

    1. address of mongodb in our local machine
        - mongodb://127.0.0.1:27017/
    2. write a funciton to connect with mongoDB on this address

    mongoose.connect('<>').then().catch()  <------- returns a promise
*/
/*
    To connect to the local instance of mongoDB

    - everything is the same
    - onl address of MongDB is diffrent
    - to get the cloud address of mongoDB
        - create a DB user in mongoDB atlas (remember <username>: appDeveloper and <password>: Apple)
        - click on connect -> connect oyour application
        - driver must be node.js
        - copy the connection string
        - mongodb+srv://appDeveloper:Apple@cluster1.shhey.mongodb.net/batch1?retryWrites=true&w=majority

        -put the username, password, and database name you want to connect
*/
