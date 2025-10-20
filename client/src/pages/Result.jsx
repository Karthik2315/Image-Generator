import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const Result = () => {
  const[image,setImage] = useState(assets.sample_img_1);
  const[isImageLoaded,setIsImageLoaded] = useState(false);
  const [loading,setLoading] = useState(false);
  const [input,setInput] = useState('');
  const {user} = useContext(AppContext);
  const navigate = useNavigate();
  useEffect(()=>{
    if(!user)
    {
      navigate('/')
    }
  },[])
  return (
    <motion.form className='flex flex-col justify-center items-center min-h-[90vh]'
    initial={{ opacity: 0.2, y: 100 }}
    transition={{ duration: 1 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}>
      <div>
        <div className='relative'>
          <img src={image} alt="Generated" className='max-w-sm rounded'/>
          <span className='absolute bottom-0 left-0 h-1 bg-blue-500 w-full transition-all duration-[10s]' />
        </div>
        {loading && <p>Loading...</p> }
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
