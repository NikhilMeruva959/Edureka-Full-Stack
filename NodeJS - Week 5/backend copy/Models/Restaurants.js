// import the mongoose package
const mongoose = require('mongoose');

//create the schema of the locations data
const Schema = mongoose.Schema; //A mongoose schema defines the shape of documents inside a particular collection.

const RestaurantSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        location_id: {
            type: Number,
            required: true
        },
        city_id: {
            type: Number,
            required: true
        },
        locality: {
            type: String,
            required: true
        },
        thumb: {
            type: Array,
            required: true
        },
        aggregate_rating: {
            type: Number,
            required: true
        },
        rating_text: {
            type: String,
            required: true
        },
        min_price: {
            type: Number,
            required: true
        },
        contact_number: {
            type: Number,
            required: true
        },
        cuisine: {
            type: Array,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        mealtype_id: {
            type: Number,
            required: true
        }
    }
);

//connect the schema with the mongoDB collection and export it
module.exports = mongoose.model('Restaurant', RestaurantSchema, 'Restaurant'); // (name of this model, name of schema, name of MongoDB collection)