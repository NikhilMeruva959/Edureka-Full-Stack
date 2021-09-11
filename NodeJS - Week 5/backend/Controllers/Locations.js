//import the Location Model
const Location = require('../Models/Locations');


//export the conroller functionality
exports.getAllLocations = (request, response) => {
    Location.find().then(result => {
        response.status(200).json({
            message: "Locations fetched",
            locations: result
        })
    }).catch(error => {
        response.status(500).json({
            message: "Error in database",
            error: error
        });
    });
};
