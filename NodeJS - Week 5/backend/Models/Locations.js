// import the mongoose package
const mongoose = require('mongoose');

//create the schema of the locations data
const Schema = mongoose.Schema; //A mongoose schema defines the shape of documents inside a particular collection.

const LocationSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        city_id: {
            type: Number,
            required: true
        },
        location_id: {
            type: Number,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        country_name: {
            type: String,
            required: true
        }
    }
);

//connect the schema with the mongoDB collection and export it
module.exports = mongoose.model('Location', LocationSchema, 'Location'); // (name of this model, name of schema, name of MongoDB collection)