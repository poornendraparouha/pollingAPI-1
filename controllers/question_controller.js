const Question=require('../models/question')
const Option=require('../models/option')

// creating controller for question
module.exports.create = async function(req, res) {
    try {
        const ques = await Question.create(req.body);
        
        // console.log(ques);
        res.status(201).send(ques);
    } catch (err) {
        // console.error("Error in creating the question schema", err);
        res.status(500).json({ error: err.message });
    }
};

module.exports.showDetails=async function(req,res){
        // console.log(req.params.id)

        const ques=await Question.findById(req.params.id).populate('options')
        

        if(ques){
            res.send(ques);
        }
        // handling the bad requests if that id does not exist
        else{
            res.send("Question does not exits");
        }

    // in this the details about the question is displayed
}

module.exports.deleteQues=async function(req,res){
    // in this the question will be deleted
        const ques= await Question.findById(req.params.id).clone().catch(function(err){ console.log(err)})
        if(ques){
            // delete all the option ⁉️ of the option db having the question id as the req.params.id
            await Question.deleteOne(req.params.id).clone().catch(function(err){ console.log(err)})
            // deleting all the option of that question
            await Option.deleteMany({question:req.params.id}).clone().catch(function(err){ console.log(err)})
                res.send("Question deleted");
    
        }
        //  if th at question of the given id does not exists then just sending a message
        else{
            res.send('Question does not exists')
        }
}