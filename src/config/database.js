// /src/config/database.js
const mongoose = require('mongoose');
const { mongoURI } = require('./config');

const connect = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log('Connected to MongoDB Atlas');
    } catch (error) {
        console.log('Error connecting to MongoDB Atlas:', error);
        throw error;
    }
};

module.exports = { connect };
