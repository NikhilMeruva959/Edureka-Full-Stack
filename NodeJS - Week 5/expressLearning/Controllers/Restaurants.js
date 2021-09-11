const { request, response } = require("express");
const getRestaurantData = require("../Models/Restaurants.json"); //importing model data for restaurants
//models basically seprate the data

const restaurantList = require("../Models/Restaurants.json");

exports.getAllRestaurants = (request, response) => {
    //buisness logic
    response.status(200).json({
        restaurants: getRestaurantData
    });
}
exports.getRestaurantByName = (request, response) =>{
    let resName = request.params.name;

    console.log(request.params);

    const restaurant = restaurantList.find((item) => {
        return item.name == resName;
    });

    console.log(restaurant);

    response.status(200).json({
        restaurant: restaurant,
        message: "Restaurant details for " + resName + "!"

    });
}