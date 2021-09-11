// Class 19

// Using core modules
const operatingSystem = require('os');
const filesys = require('fs');
const bodyParser = require('body-parser'); //npm module
const http = require('http');

// os.platform() - Returns a string identifying the operating system platform 
console.log("OS Platform: " + operatingSystem.platform());
console.log("OS Archeticutre: " + operatingSystem.arch());
console.log("OS Release: " + operatingSystem.release());

filesys.writeFile("testDoc.txt", "Welcome to Eudreka!!!", (error) => {
    if(error){
        console.log("Error creating the file");
    } else{
        console.log("Successfully created the file!!!");
    }
});

filesys.truncate("testDoc.txt", 8, (error) => {
    if(error){
        console.log("Error truncating the file");
    } else{
        console.log("Successfully truncated the file!!!");
    }
});

http.createServer((request, response) => {
    response.writeHead(200); //send info. back from the server
    response.write("Welcome to the Server!!!");
    response.end(); //send info. back from the server
}).listen(3000);

/*
    To start using the npm modules
        -> you have to create the project using command: npm init
        
        -> npm init
            -> created a file package.json
                - has a list of packages you download from the npmjs.com
                - metadata information about the develiper and the project

            -> creates a node_modules folder
                - npm packages will reside here 

        -> you can installl the packages from npmjs.com
            e.g. body-parser
            -npm i body-parser --save
*/

/* 
    Starting package 
    package.json
        - "start": "node app.js" 
            - npm run start 
                - command running file now in gitbash

*/

/*
    Creating server using HTTP core module
    - imported the module
        const http = require('http');

    - http.createServer().listen(<port_number>)
        - port is a location in computer using which your computer can communicate
        - computer can send and receive the information using ports

        -you can see the server running on http://localhost:3000/

    - to stop the server press crtl and c 
*/