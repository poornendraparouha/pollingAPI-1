const express=require('express');
const Router=express.Router();
const optionsController=require('../../../controllers/option_controller');

Router.post('/:id/create',optionsController.create);
Router.get('/:id/add_vote',optionsController.add_vote);
Router.delete('/delete/:id',optionsController.delete);

module.exports=Router;