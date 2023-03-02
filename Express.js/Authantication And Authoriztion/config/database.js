const mongoose = require('mongoose');
const db_url = "mongodb://127.0.0.1:27017/auth";
    
const DBConnection = mongoose.connect(db_url).then(() =>
    console.log("Database connected")
).catch(() =>
    console.log("Database connection failed")
);

module.exports = DBConnection;