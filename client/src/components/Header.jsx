import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const {user,setShowLogin} = useContext(AppContext);
  const navigate = useNavigate();
  const onclickHandler = () => {
    if(user)
    {
      navigate('/result');
    }
    else {
    setShowLogin(true);
    }
  }
  return (
    <motion.div className='flex flex-col justify-center items-center my-20'
    initial={{ opacity: 0.2, y: 100 }}
    transition={{ duration: 1 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}>
      <motion.div className='text-stone-500 inline-flex text-center gap-2 bg-white py-1 px-6 rounded-full border border-neutral-500 hover:rotate-4 
      transition-all duration-700'
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.8 }}>
        <p>Best text to image transilator </p>
        <img src={assets.star_icon} alt="star" />
      </motion.div>
      <h1 className='text-7xl max-w-[590px] mx-auto mt-15 text-center '>Turn text to <span className='text-blue-500 hover:text-red-500 transition-colors duration-500 cursor-pointer'>image</span>, in seconds</h1>
      <p className='mt-5 text-center mx-auto max-w-xl'>
        Unleash your creativity with AI. Transform your ideas into stunning visuals instantly - just type and watch the magic happen!
      </p>

      <motion.button onClick={onclickHandler} className='flex items-center gap-2 mt-10 bg-black text-white rounded-2xl px-4 py-2 cursor-pointer hover:scale-105 transition-all duration-700'
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ default: { duration: 0.5 }, opacity: { delay: 0.8, duration: 1 } }}>
        Generate Image
        <img src={assets.star_group} alt="start" className='w-5'/>
      </motion.button>
      <motion.div className='flex items-center justify-center gap-2 mt-12 flex-wrap'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}>
        {Array(6).fill('').map((item,index) => (
          <img src={index%2==0 ? assets.sample_img_2 : assets.sample_img_1} key={index} alt="temp" className='h-20 rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer'/>
        ))}
      </motion.div>

      <div className='mt-2 text-gray-600'>
        <motion.p initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.8 }}>Generated images from imagify </motion.p>
      </div>
    </motion.div>
  )
}

export default Header
