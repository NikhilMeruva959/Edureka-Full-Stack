const { request } = require("express");


exports.createUser = (request, response) => {
    const data = request.body; // reading request.data using body parser

    console.log(data);

    response.status(200).json({
        message: "Received the data",
        userData: data
    });
}