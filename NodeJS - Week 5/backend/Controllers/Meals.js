//import the Restaurant Model
const Meals = require("../Models/Meals");
 
//export the conroller functionality
exports.getMealTypes = (request, response) => {
    Meals.find().then(result => {
        response.status(200).json({
            message: "Mealtypes fetched",
            locations: result
        })
    }).catch(error => {
        response.status(500).json({
            message: "Error in database",
            error: error
        });
    });
};
