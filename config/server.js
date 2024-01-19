const express = require('express')
const port = 7001;
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const db = require('./db');

// Routes
app.use('/',require('../routes/index'));


module.exports.startServer = async function startServer(){
    try { await mongoose.connect(
        process.env.MONGODB_URI,
        // "mongodb://127.0.0.1:27017/pollingApi",
        {
            useNewUrlParser:true,
            useUnifiedTopology:true
        }
    );
    app.listen(port, function (err){
        if (err){
            console.log("error in connecting to server", err);
            return;
    
        }console.log(`Server is listning on port :${port}`);
    });
    } catch(err){
        console.log('error', err);
    }console.log('connected to database :: mongoDB');
}