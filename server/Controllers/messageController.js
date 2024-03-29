const MessageModel = require("../Models/MessageModel");
const AdminStaff = require("../Models/AdminModel")
const Theater = require("../Models/TheaterModel")

module.exports.addMessage= async(req,res,next)=>{

    try{
        const {from,to,message}= req.body;
    
        const data = await MessageModel.create({
            message:{text:message},
            users:[from,to],
            sender:from
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
   
        const messages = await MessageModel.find({users:{$all:[from,to]},}).sort({updatedAt:1});
        const projectMessages = messages.map((msg)=>{
            return{
                fromSelf:msg.sender.toString() === from,
                message:msg.message.text,
                send:msg.createdAt
            }
        });
  
        res.json(projectMessages)
    } catch (error) {
        console.log(error)
    }
}

module.exports.getAdmin = async (req, res, next) => {
  try {

    const users = await AdminStaff.find({}).select([
      "email",
      "name",
      "_id",
    ]);
    return res.json(users);
  } catch (ex) {
    next(ex);
  }
};
module.exports.getTheater = async (req, res, next) => {
  try {

    const users = await Theater.find({}).select([
      "email",
      "theater",
      "_id",
    ]);
    return res.json(users);
  } catch (ex) {
    next(ex);
  }
};

module.exports.getLatestMessage =async(req,res)=> {
 
  let userId = req.params.id
  console.log("helloooooo",userId)
  try {
      const message = await MessageModel.findOne({ sender: userId })
      .sort({ createdAt: -1 })
      .select('createdAt')
      .lean();
    return res.json(message);
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch latest message');
  }
}