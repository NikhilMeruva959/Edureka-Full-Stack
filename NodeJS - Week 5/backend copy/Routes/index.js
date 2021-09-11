const express = require('express'); //importing express
const router = express.Router(); // need the router from the express

// import the controllers
const locationController = require('../Controllers/Locations'); //import the controller 
const restaurantController = require('../Controllers/Restaurants'); //import the controller 
const mealsController = require('../Controllers/Meals'); //import the controller 
const userController = require('../Controllers/User'); //import the controller
//const paymentController = require('../Controllers/Payment'); //import the controller


// declare the routes
router.get('/getAllLocations', locationController.getAllLocations);
router.get('/getAllRestaurants', restaurantController.getAllRestaurants);
router.get('/getRestaurantsByLocation/:cityName', restaurantController.getRestaurnatsByLocation);
router.get('/getRestaurantsById/:restaurantId', restaurantController.getRestaurnatsById);
router.get('/getMealTypes', mealsController.getMealTypes);
router.post('/filterRestaurants', restaurantController.filterRestaurants);
//router.post('/payment', paymentController.payment);
//router.post('/paymentCallback', paymentController.paymentCallback);
router.post('/signUp', userController.signUp);
router.post('/login', userController.login);

// export the router
module.exports = router;

/*
    How NodeJS Interacts with MongoDB
    
    1) making a connection - done
    2) after we establish a connection with mongoDB 

    Routes - API routes
    Controllers - we write logic of the API
    Models - which is used to interact with the data
           - we will write moddel schemas to connect with our mongoDB
           - create them, export them
           - imported in controllers
           - controllers are going to use these models to
                - get
                - update
                - delete
                - create

    Project Structure:
        Backend:
            - app.js
            - package.json
            - node_modules
            -> Routes
                - index.js
                    -> getAllLocations
                    -> getRestaurantsByLocation
                    -> getMealTypes
                    -> getRestaurantsById
                    -> filterRestaurants
                        - mealtype
                        - location
                        - cuisine
                        - lcost
                        - hcost
                        - sort
                        - pages
                    -> userSignUp
                    -> userLogin
                    -> payment
                    -> paymentCallBack
            -> Controllers
                - user controller 
                - restaurant controller
                - location controller
                - mealtype controller
                - payment controller
                - order controller
            -> Models
                - user model 
                - restaurant model
                - location model
                - mealtype model
                - payment model
                - order model

    
*/
