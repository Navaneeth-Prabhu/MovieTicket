const MessageModel = require("../Models/MessageModel");

module.exports.addMessage= async(req,res,next)=>{
    try{
        const {to,message}= req.body;
        console.log("body",req.body)
        const data = await MessageModel.create({
            message:{text:message},
            // users:[from,to],
            users:[to],
            // sender:from
        })
        if(data) return res.json({msg:'message added successfully'});
        return res.json({msg:"failed to add message to database"})
    }catch(err){
        next(err)
    }
};

module.exports.getAllMessage = async(req,res,next)=>{
    try {
        const {from,to}= req.body
        console.log("iddddd",req.body)
        const messages = await MessageModel.find({users:{$all:[to]},}).sort({updatedAt:1});
        const projectMessages = messages.map((msg)=>{
            return{
                // fromSelf:msg.sender.toString() === to,
                message:msg.message.text,
            }
        });
        console.log(projectMessages)
        res.json(projectMessages)
    } catch (error) {
        console.log(error)
    }
}