import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const jwtAuth = async(userID) => {
  return jwt.sign({id:userID},process.env.JWT_SECRET,{
    expiresIn:"7d"
  });
}

export const registerUser = async (req,res) => {
  try{
    const {name,email,password} = req.body;
    if(!name || !email || !password)
    {
      return res.status(400).json({
        success:false,
        message:"Please provide all required details"
      })
    }
    let user = await userModel.findOne({email});
    if(user)
    {
      res.status(409).json({
        success:false,
        message:"User already exists , please login"
      })
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);
    const userData = {
      name,
      email,
      password:hashedPassword
    }
    const newuser = new userModel(userData);
    user = await newuser.save();
    const token = await jwtAuth(user._id);
    res.cookie('token',token,{
      httpOnly:true,
      maxAge:7*24*60*60*1000,
      secure:process.env.NODE_ENV === 'production'
    });
    res.status(201).json({
      success:true,
      token,
      user:{
        name:user.name
      }
    })
  }catch(error)
  {
    res.status(500).json({
      success:false,
      message:"Registering user failed",
      error:error.message
    })
  }
}

export const loginUser = async(req,res) => {
  try {
    const {email,password} = req.body;
    if(!email || !password)
    {
      return res.status(400).json({
        success:false,
        message:"Please provide all required details"
      })
    }
    const user = await userModel.findOne({email});
    if(!user)
    {
      return res.status(404).json({
        success:false,
        message:"User not found , please register"
      })
    }
    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch)
    {
      return res.status(401).json({
        success:false,
        message:"Invalid credentials"
      })
    }
    else
    {
      const token = await jwtAuth(user._id);
      res.cookie('token',token,{
        httpOnly:true,
        maxAge:7*24*60*60*1000,
        secure:process.env.NODE_ENV === 'production'
      });
      res.status(200).json({
        success:true,
        token,
        user:{
          name:user.name
        }
      })
    }
  }
  catch (error) {
    res.status(500).json({
      success:false,
      message:"Login user failed"
    })
  }
}

export const userCredits = async(req,res) => {
  try {
    const userID = req.user.id;
    const user = await userModel.findById(userID);
    if(!user)
    {
      return res.status(404).json({
        success:false,
        message:"User not found"
      })
    }
    res.status(200).json({
      success:true, 
      credits:user.creditBalance,
      user:{
        name:user.name
      }
    });
  } catch (error) {
    res.status(500).json({
      success:false,
      message:"Fetching user credits failed"
    })
  }
}

export const logoutUser = async(req,res) => {
  try {
    res.clearCookie('token',{
      httpOnly:true,
      secure:process.env.NODE_ENV === 'production'
    });
    res.status(200).json({
      success:true,
      message:"Logged out successfully"
    })
  } catch (error) {
    res.status(500).json({
      success:false,
      message:"Logout failed"
    })
  }
}