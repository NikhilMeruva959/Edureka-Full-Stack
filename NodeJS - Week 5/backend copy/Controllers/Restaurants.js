//import the Restaurant Model
const { request, response } = require('express');
const Restaurant = require('../Models/Restaurants');



exports.getAllRestaurants = (request, response) => {
    Restaurant.find().then(result => {
        response.status(200).json({
            message: "Restaurant fetched",
            restaurants: result
        })
    }).catch(error => {
        response.status(500).json({
            message: "Error in database",
            error: error
        });
    });
};
exports.getRestaurnatsByLocation = (request, response) => {
    const cityName = request.params.cityName;
    Restaurant.find({city : cityName}).then(result => {
        response.status(200).json({
            message: "Restaurant fetched for city: " + cityName,
            restaurants: result
        });
    }).catch(error => {
        response.status(500).json({
            message: "Error in database",
            error: error
        });
    });
}
exports.getRestaurnatsById = (request, response) => {
    const restaurantId = request.params.restaurantId;
    Restaurant.find({_id : restaurantId}).then(result => {
        response.status(200).json({
            message: "Restaurant fetched for id: " + restaurantId,
            restaurant: result[0]
        });
    }).catch(error => {
        response.status(500).json({
            message: "Error in database",
            error: error
        });
    });
}
exports.filterRestaurants = (request, response) => {
    const {
        mealtype, 
        location, 
        cuisine, 
        lcost, 
        hcost, 
        sort, 
        page =1
    } = req.body;

    let filters = {} //empty object

    // add logic to apply 
    if(mealtype){
        filters.mealtype_id = mealtype;
    }
    if(location){
        filters.location_id = location;
    }
    if(cuisine && cuisine.length > 0){
        filters['cuisine.name'] = {
            $in: cuisine               // when you use arrays, you will use $in
        }
    }
    if(hcost && lcost){
        if(lcost == 0){
            filters.min_price = {
                $lt: hcost  // $lt less than
            }
        } else {
            filters.min_price = {
                $gt: lcost,
                $lt: hcost  // $lt less than
            }
        }
    }
    Restaurant.find(filters).sort({min_price: sort}).then(result => {

        // result array can have any number of items (may be 20, 12, 5, 7, 200)
        // as per design we only show 2 items per page
        // e.g. if user page = 1, then we need to show index 0, 1 of result array
        // if user passes page = 2, then we need to show index 2, 3 of result array
        const pageSize = 2;
        let tempArray = [];

        function paginate(arr, page_size, page_no){
            const paginatedResult = [];
            return paginatedResult;
        }

        tempArray = paginate(result, pageSize, page);

        response.status(200).json({
            message: "Filtered Restaurant fetched: " + cityName,
            restaurants: tempArray
        });
    }).catch(error => {
        response.status(500).json({
            message: "Error in database",
            error: error
        });
    });
}

