const { request } = require("express");
const getLocationsData = require("../Models/Locations.json");


exports.getAllLocations = (request, response) => {
    //buisness logic
    response.status(200).json({
        locations: getLocationsData
    });
}