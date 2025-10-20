import userModel from "../models/userModel.js";
import Formdata from "form-data";
import axios from "axios";

export const generateImage = async(req,res) => {
  try {
    const userID = req.user.id;
    const {prompt} = req.body;
    const user = await userModel.findById(userID);
    if(!user || !prompt)
    {
      return res.status(404).json({
        success:false,
        message:"Missing details"
      })
    }
    if(user.creditBalance <= 0)
    {
      return res.status(403).json({
        success:false,
        message:"Insufficient credits"
      })
    }

    const formData = new Formdata();
    formData.append('prompt', prompt);
    const {data} = await axios.post('https://clipdrop-api.co/text-to-image/v1',formData,{headers: {
      'x-api-key': process.env.CLIPDROP_API_KEY,
    },responseType:'arraybuffer'})

    const base64Image = Buffer.from(data, 'binary').toString('base64');
    await userModel.findByIdAndUpdate(userID,{$inc:{creditBalance:-1}});
    const resultImage = `data:image/png;base64,${base64Image}`;
    res.status(200).json({
      success:true,
      creditBalance:user.creditBalance - 1,
      message:"Image generated successfully",
      image:resultImage,
    })
    
  } catch (error) {
    res.status(500).json({
      success:false,
      message:error.message
    })
  }
}