import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"

const Description = () => {
  return (
    <motion.div className='flex flex-col items-center justify-center mt-10 p-6 mx-50'
    initial={{ opacity: 0.2, y: 100 }}
    transition={{ duration: 1 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}>
      <h1 className='text-4xl font-bold'>Create AI Images</h1>
      <p className='text-gray-500 mt-3 mb-16'>Turn your imaginations into Visuals</p>
      <div className='flex justify-between items-center gap-8 '>
        <motion.img src={assets.sample_img_1} alt="temp" className='w-80 rounded-lg'
                initial={{ opacity: 0, scale: 0.8 }}     
                animate={{ opacity: 1, scale: 1 }}        
                transition={{ duration: 0.8 }}           
                whileHover={{ scale: 1.1, rotate: 4 }} 
                  /> 
        <div>
            <h2 className='text-3xl font-medium mb-4'>Introducing the AI-Powered Text to Image Generator</h2>
            <p className='text-gray-600 mb-4'>Easily bring your ideas to life with our free AI image generator. Whether you need stunning visuals or unique imagery, our tool transforms your text into eye-catching images with just a few clicks. Imagine it, describe it, and watch it come to life instantly.</p>
            <p className='text-gray-600 mb-4'>Simply type in a text prompt, and our cutting-edge AI will generate high-quality images in seconds. From product visuals to character designs and portraits, even concepts that don't yet exist can be visualized effortlessly. Powered by advanced AI technology, the creative possibilities are limitless!</p>
        </div>
      </div>
    </motion.div>
  )
}

export default Description
