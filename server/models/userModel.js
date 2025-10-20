import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true,
    unique:true,
    validate:{
      validator:validator.isEmail,
      message:"Please enter a valid email"
    }
  },
  password:{
    type:String,
    required:true,
  },
  creditBalance:{
    type:Number,
    default:5
  }
});

const userModel = mongoose.models.user || mongoose.model("user",userSchema);

export default userModel;