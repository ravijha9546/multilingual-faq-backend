const express = require('express');
const connectDB = require("./config/db.js");
const PORT = process.env.PORT||5000;

const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();
const faqRoutes = require('./routes/faqRoutes');

const app = express();

connectDB().then(()=>{
    console.log("Database connection established");
    app.listen(PORT, ()=>{
        console.log(`Server is running on ${PORT}`);
        });
}).catch(err=>{
    console.error("Databse not established");

});


app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/api/faqs', faqRoutes);



