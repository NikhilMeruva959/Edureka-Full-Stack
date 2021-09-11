//const { request, response } = require('express');
const User = require('../Models/User');

exports.signUp = (request, response) => {
    // create a new user
    const {
        email,
        password,
        firstName, 
        lastName, 
    } = request.body;
    // create a new Object of User class
    const userObj = new User(
        {
            email: email,
            password: password, 
            firstName: firstName,
            lastName: lastName,
        }
    )
    //will call save method on object
    userObj.save().then(result => {
        response.status(200).json({
            message: "User created",
            user: result
        });
    }).catch(error => {
        response.status(500).json({
            message: "Error in database",
            error: error
        });
    });
}

exports.login = (request, response) => {
    // verify ad login the user
    const {
        username,
        password
    } = request.body;

    User.find({
        email: username,
        password: password
    }).then(result => {
        if(result.length > 0){
            response.status(200).json({
                message: "User Logged Successfully!!!",
                user: result[0],
                isLoggedIn: true
            });
        } else {
            response.status(400).json({
                message: "Username or password is wrong!!!",
                isLoggedIn: false
            });
        }
    }).catch(error => {
        response.status(500).json({
            message: "Error in database",
            error: error
        });
    });
}