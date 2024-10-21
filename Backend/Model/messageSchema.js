import mongoose from "mongoose";
import validator from "validator";
const messageSchema= new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:[3," the first name atleasst contain 3 char"]
    },
    lastName:{
        type:String,
        required:true,
        minLength:[3," the last name atleasst contain 3 char"]
    },
    email:{
        type:String,
        required:true,
        validate:[validator.isEmail,"please give valid email adress"]
    },
    phone:{
        type:String,
        required:true,
        minLength:[10,"please give the 10 digit number"],
        maxLength:[10,"please give the 10 digit number"]
    },
    message:{
        type:String,
        
        minLength:[3,"  atleasst contain 3 char"]
    }

})
export const Message=mongoose.model("Message",messageSchema);