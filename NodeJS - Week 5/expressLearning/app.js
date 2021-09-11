const express = require("express");
const bodyParser = require('body-parser'); //body parser package

const routes = require('./Routes/index'); //importing routes

const app = express();
app.use(bodyParser.json()); //used for index.js line 20

const port = 3434;

//middleware changing security of application
//enable front-end to back-end
app.use((request, response, next) => {
    response.setHeader('Acess-Control-Allow-Origin', 'http://localhost:3000'); //backend server will only allow incoming request from this localstorage 
    response.setHeader('Acess-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); //whatever methods you want to allow
    response.setHeader('Acess-Control-Allow-Headers', 'Content-Type, Authorization'); //allowing what all headers in the incoming request will be there and be accepted in the backend server
    next(); // need to include next or else middleware will terminate
    //next() will continue on to the next middleware
});

app.use('/v2', routes) //on every request use the routes
// Base routes like v2 is for versoning APIs

//for changing security level of application, we will use another middleware 

app.listen(port, () => {
    console.log('Server is running on port: ' + port);
});

/*
    Verbs in APIs

    -> GET : to get the data from the server
    -> POST : to send the data to the server (receive data with express)
    -> PUT : to modify the data on the server
    -> DELETE : if you want tto delete data on the server

    CRUD Operations
    C -> Create POST
    R -> Read GET 
    U -> Update PUT
    D -> Delete DELETE
 */
/*
    Status Codes:
    100 - Informations satus code
    200 - Sucess status codes
    300 - redirections
    400 - Client side errors
    500 - server side errors
*/
/*
    Express JS:

    -> Installing: npm i express --save
    -> create and started the server

    -> Concept of middlewares: small peices of code which you can execute in ExpressJS

    -> understand MVC
    -> understand routing
    -> receive the data on the server using body-parser
*/
/*
    npm init - used to set up a new package.json
*/
/*
    MVC
    -> it is an architecture to write the code
    -> M: Model - to deal with the data (database like mongoDB, filesystem) 
        -> essentially storing data in JSON format to connect in Controllers
    -> V: Veiw - to handle the incoming requests (Routes)
        -> to hangle GET, POST, and importing Controllers
    -> C: Controller - buisness logic to process the incoming request
        -> basically code/logic for that specific command
*/
/*
    Folder Structure
        -> app.js (starting point of our BE application)
        -> package.json (project related information)
        -> node_modules : to keep all the installed packages
        -> Modules
            -> list of restaurantes
            -> list of locations
        -> Routes 
            -> restaurants 
            -> locations
            -> login
            -> orders
        -> Controllers
            -> restaurant Controller
            -> location Controller
            -> login Controller
            -> order Controller
*/
/*
    Database
    -> a software which manages the storage and retreival of data
    -> to store the data
    -> to retreive the data when asked

    FE <---> BE <---> DB
*/
/*
    (1) Structured data
    - which is stored in the form of rows and colums
    - data is stored in the tables
    - SQL: Structured Query Language
    - e.g. MySQP Server, DB2, MariaDB, AuroraDB, PostgreSQL, etc.
    - SQL Databases
    - as the size of database increases, the performance of the DB becomes slow
    - you can create relationships the tables

    Ex. 
    Roll Number     | Name     | Class     | City
    -------------------------------------------------
    1               | Taurn     | 12       | null
    2               | Rohit     | 11       | San Fransico
    3               | Aditya    | 19       | null
    4               | Abhi      | 7        | Manhattan
    ...
*/
/*
    (2) Non-structured data
    - Data is stored in the form of key:value
    - keys (columns), documents (rows) and collections (tables)
    - NoSQL
    - e.g. MongoDB, Redis, etc.
    - NoSQL Databases
    - It is very performant
    - No relationship between the collections

    {
        "rollNum": 1,
        "name": "David",
        "class": "Montclair State"
    },
    {
        "rollNum": 2,
        "name": "John",
        "class": "Rutgers"
    },
    {
        "rollNum": 3,
        "name": "Alex",
        "class": "Rutgers",
        "subjects": "Mechanical Engineering",
        "city": "New Brunswick" 
    },
*/
/*
    MongoDB 

    To connect:
    1) Go to File Explorer
    2) Go to: This Pc -> (C) -> Program Files -> MongoDb -> Server -> 5.0 -> bin
    3) In file directory type: cmd
    4) Then type command: mongod
        -> starts the server
    5) Then type command: mongo
        -> Run this command in the localhost shell to connect to the local database on the default port 27017
    6) Then type command: exit
        -> Gets out of mongodb 
    MongoDB will be availiable at mongodb://127.0.0.1:27017/

    Can be used via 2 diff ways:
    1) CLI - command line interface
        -> cmd (windows)
    2) GUI - Graphical User Interface
        -> MongoDB Compass

    Cloud Version of MongoDB - (MongoDB Atlas)
    - Create an account on MongoDB Atlas

*/
/*
    Connect NodeJS with MongoDB
    Mongoose NPM Package

    -> an npm package used by Backend to connect to MongoDB
    -> it enables us to issue commands and query the MongoDB locally and the cloud version
    -> Command: npm i mongoose --save

    FE <-----> BE (APIs) <---> (Mongoose) <---> MongoDB
*/
/*
    Commands in mongoDB:

    1) show databases - list of all the databases in the system
    2) db - gives name of the current databse we are working with
    3) use <name_of_database>
        1. if the databse does not exist, it will create a databse and take you inside it
            -> but if you do show databases command it will not show the new batch you created because it is empty
        2. if the databse is already there, it will directly take you inside it
    4) db.createCollection("<name_of_collection>") - create a collection inside the current database
        -> Ex. db.createCollection("Students")
        -> collections (tables)
    5) show collections - gives a list of collections in the database
    6) Insert a document(is called a row in RDBMS) in a collection (insert data in the collection)
        a. Insert one document at a time

            db.Students.insertOne(
                {
                    "Roll No": 7,
                    "Name": "Rohit",
                    "Class": "Computer Science",
                    "Age": 19
                }
            )

        b. Insert multiple documents at a time
            db.Students.insertMany(
                [
                    {
                        "Roll No": 3,
                        "Name": "Nikhil",
                        "Class": "Computer Science"
                    },
                    {
                        "Roll No": 4,
                        "Name": "Sid",
                        "Class": "Finance"
                    },
                    {
                        "Roll No": 6,
                        "Name": "Yash",
                        "Class": "Bio Medical"
                    }
                ]
            )
    7) How to find the data:
        a. get all the data
            db.Students.find()

        b. to beautify the output
            db.Students.find().pretty()

    8) How to Query / filter the data:
        syntax: db.<name_of_collection>.find(<conditions>)
        a) Ex. 
            db.Students.find(
                {
                    "Roll No": 2
                }
            ).pretty()

        b) Ex. Getting all the documents that a roll number greatr than 2 and less than 5
            db.Students.find(
                {
                    "Roll No": {
                        $gt: 2,
                        $lt: 5
                    }
                }
            ).pretty()

    9) How to delete a collection
        db.<name_of_collection>.drop()
    
    10) How to update a document
        
        updateOne()

        updateMany()    
    
        db.Students.update(
                { "Roll No": 3 },
                { $set: {"Name": "Nikhil Meruva"}}
        )

    11) How to retreive specific fields from a document
        db.Students.find({}, {"Roll No": 2, "Name": 1}).pretty()
*/
