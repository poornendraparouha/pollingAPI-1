const express=require('express');
const Router=express.Router();

// this is the entry point of all the api named url's
Router.use('/api',require('./API/index'));

module.exports=Router