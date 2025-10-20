import React, { useContext } from 'react'
import { assets, plans } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { motion } from "motion/react"

const BuyCredit = () => {
  const {user} = useContext(AppContext);
  return (
    <motion.div className='min-h-[80vh] flex flex-col items-center pt-14'
    initial={{ opacity: 0.2, y: 100 }}
    transition={{ duration: 1 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}>
      <button className=' border border-gray-400 px-10 py-2 rounded-full mb-6 bg-white text-blue-600
    hover:bg-gradient-to-r hover:from-blue-400 hover:via-blue-500 hover:to-blue-600 hover:text-white
    transform-gpu hover:rotate-5
    transition-all duration-300'>Our Plans</button>
      <h1 className='text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-black to-black hover:from-blue-500 hover:to-red-500 transition-all duration-700'>Choose the Plan</h1>

      <div className='flex justify-between gap-10 mt-10'>
        {plans.map((item,index) => (
          <div key={index} className='p-5 flex flex-col bg-white rounded-2xl hover:scale-105 hover:shadow-lg transition-all duration-500'>
            <img src={assets.logo_icon} alt="temp" className='w-8 pb-4'/>
            <p className='font-semibold text-2xl'>{item.id}</p>
            <p className='pt-2 pb-7'>{item.desc}</p>
            <p><span className='text-4xl font-bold text-gray-500'>${item.price}</span>  / {item.credits} credits</p>
            <button className='mt-14 bg-black text-white px-4 py-2 rounded-full cursor-pointer hover:scale-105 transition-all duration-500'>{user ? 'Purchase' : 'Get Started'}</button>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default BuyCredit
