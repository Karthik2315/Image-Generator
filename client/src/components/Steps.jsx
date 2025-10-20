import React from 'react'
import {  stepsData } from '../assets/assets'
import { motion } from "motion/react"

const Steps = () => {
  return (
    <motion.div className='flex flex-col items-center justify-center gap-2'
    initial={{ opacity: 0.2, y: 100 }}
    transition={{ duration: 1 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}>
      <h1 className='text-5xl font-semibold mb-1'>How it works</h1>
      <p className='text-lg text-gray-600'>Transform Words to Stunning Images</p>
      <div className='mt-8 text-sm w-full max-w-3xl'>
        {stepsData.map((item,index) => (
          <div key={index} className='flex items-center gap-2 px-2 py-6 bg-white rounded-md mb-4 shadow-md cursor-pointer hover:scale-[1.02] transition-all duration-300'>
            <img src={stepsData[index].icon} alt="step icon"/>
            <div className='ml-2'>
              <p className='text-xl font-medium'>{stepsData[index].title}</p>
              <p className='text-gray-500'> {stepsData[index].description}</p>
            </div>
          </div>
        ))}
      </div>

    </motion.div>
  )
}

export default Steps
