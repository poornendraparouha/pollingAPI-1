const express = require('express')
const port = 7002;
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const db = require('./config/db');

// Routes
app.use('/',require('./routes/index'));

app.listen(port, function (err){
    if (err){
        console.log("error in connecting to server", err);
        return;

    }console.log(`Server is listning on port :${port}`);
});