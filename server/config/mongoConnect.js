const mongoose = require('mongoose');
const express = require('express');
const app = express();
require('dotenv').config();


// connect to mongodb

const connector = async () => {
    await mongoose.connect(process.env.MONGO_CONNECTION_URL)
    .then(() => {
        console.log('Connected to MongoDB');
    })
}

module.exports = connector