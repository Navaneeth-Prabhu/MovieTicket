const mongoose = require("mongoose")
const bcrypt = require('bcrypt')

const adminScheema = new mongoose.Schema({

    name:{
        type:String,
        required:[true,"name is required"],
        
    },
    email:{
        type:String,
        required:[true,"email is required"],
      
    },
    password:{
        type:String,
        required:[true,"Password is Required"]

    },
    Block:{
        type:Boolean,
        default:false

    }
})

adminScheema.pre('save',async function (next){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password,salt)
    next()
})
adminScheema.statics.login = async function(email,password){
    const staff = await this.findOne({email});
    if(staff){
        const auth = await bcrypt.compare(password, staff.password);
        if(auth){
            return staff;
        }
        throw Error("incorrect password")
    }
    throw Error ("incorrect email")
}



module.exports = mongoose.model("Admins",adminScheema)