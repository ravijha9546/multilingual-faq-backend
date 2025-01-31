const express = require('express');
const connectDB = require("./config/db.js");
const PORT = process.env.PORT||5000;

require('dotenv').config();

const app = express();

connectDB().then(()=>{
    console.log("Database connection established");
    app.listen(PORT, ()=>{
        console.log(`Server is running on ${PORT}`);
        });
}).catch(err=>{
    console.error("Databse not established");

});

