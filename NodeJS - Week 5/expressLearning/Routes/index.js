const express = require('express'); //importing express
const router = express.Router(); //taking a variable for router functionality

const restaurantController = require('../Controllers/Restaurants'); //import the controller 
const locationController = require('../Controllers/Locations'); //import the controller 
const userController = require('../Controllers/User'); //import the controller 


/* Old way of creating endpoints

Creating as many endpoints as I like with router 
router.get('/getAllRestaurants', (request, response) => {
    //buisness logic
    response.status(200).json({
        restaurants: [
            { name: "Chick Fil A", rating: 4.7 },
            { name: "Burger King", rating: 2.6 },
            { name: "McDonalds", rating: 3.2 },
            { name: "Shake Shack", rating: 4.9 }
        ]
    });
});
*/
router.get('/getAllRestaurants', restaurantController.getAllRestaurants);
router.get('/getRestaurantByName/:name', restaurantController.getRestaurantByName);

router.get('/getAllLocations', locationController.getAllLocations);
router.post('/createUser', userController.createUser);

router.post('/payment', (request, response) => {

});

module.exports = router; //exporting the router because app.js should know I have these routes in the application
// importing in app.js