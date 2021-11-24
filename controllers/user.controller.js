const User = require('../models/user.model');

const createUser = async (req, res)=>{
    try{
        const existingData = await User.findOne({name:req.body.name})
         
        if(!existingData) {
            
            const newUser = new User(req.body);
     
            const save = await newUser.save();
            
            res.status(200).send(save)
        }else{
           
            res.status(400).send({error: true, message: "already existe data."})
        }
    }catch(error){
        res.send({error: true, message : 'error'})
    }
}

const updateUser = async (req, res) =>{

    try{

        const id = req.params.uid;
        const update = req.body;

        const result = await User.findOneAndUpdate(id,update, {new:true});
        res.send(result)

    }catch (error){
        res.status(501).send(error)
    }

}

module.exports = {createUser, updateUser};