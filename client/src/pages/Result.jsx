import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import axios from 'axios';

const Result = () => {
  const[image,setImage] = useState(assets.sample_img_1);
  const[isImageLoaded,setIsImageLoaded] = useState(false);
  const [loading,setLoading] = useState(false);
  const [input,setInput] = useState('');
  const {user,isloading,backendURL,updateUserCredits} = useContext(AppContext);
  const navigate = useNavigate();
  useEffect(()=>{
    if(!isloading){
      if(!user) navigate('/');
    }
  },[user,isloading]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if(user.creditBalance===0) navigate('/buy');
      const {data} = await axios.post(`${backendURL}/api/image/generate-image`,{prompt:input},{withCredentials:true});
      if(data.success){
        setImage(data.image);
        setIsImageLoaded(true);
        if(data.creditBalance !== undefined){
          updateUserCredits(data.creditBalance);
        }
        toast.success("Image generated successfully");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message || "Something went wrong");
    }
  }
  return (
    <motion.form className='flex flex-col justify-center items-center min-h-[90vh]'
    initial={{ opacity: 0.2, y: 100 }}
    transition={{ duration: 1 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }} onSubmit={handleSubmit}>
      <div>{isImageLoaded ? <img src={image} alt="generated_image" className='w-[400px] h-[400px] object-cover rounded-lg shadow-lg'/> :
        <div className='flex flex-col justify-center items-center gap-5'>
          <motion.p className='text-6xl font-bold cursor-pointer hover:scale-105 transition-all duration-700'
            initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}   
              transition={{ duration: 0.6, ease: "easeOut" }}>Your Imagination</motion.p>
          <motion.p className='text-3xl font-semibold cursor-pointer'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}   
              transition={{ duration: 0.6, ease: "easeOut" }}>starts here</motion.p>
        </div> }
      </div>
      {!isImageLoaded &&
      <div className='flex w-[600px] bg-neutral-500 text-white text-sm p-0.5 mt-10 rounded-full'>
        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder="Describe what you want to generate" className='flex-1 bg-transparent outline-none ml-8 p-3 rounded-4xl'/>
        <button type="submit" className='bg-black text-white rounded-4xl px-6 py-3 cursor-pointer'>Generate Image</button>
      </div>
      }
      {isImageLoaded &&
      <div className='flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full'>
        <p onClick={() => {setIsImageLoaded(false)}} className='bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer hover:scale-105 transition-all duration-700'>Generate Another</p>
        <a href={image} download className='bg-zinc-900 px-10 py-3 rounded-full cursor-pointer hover:scale-105 transition-all duration-700'>Download</a>
      </div>
      }

    </motion.form>
  )
}

export default Result
