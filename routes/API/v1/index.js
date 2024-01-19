const express=require('express');
const Router=express.Router();

// this is the entry point of all the API/v1/questions named url's
Router.use('/question',require('./question'));
Router.use('/option',require('./option'));

module.exports=Router;