// import the mongoose package
const mongoose = require('mongoose');

//create the schema of the locations data
const Schema = mongoose.Schema; //A mongoose schema defines the shape of documents inside a particular collection.

const UserSchema = new Schema(
    {
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        }
    }
);
module.exports = mongoose.model('User', UserSchema, 'User'); // (name of this model, name of schema, name of MongoDB collection)
