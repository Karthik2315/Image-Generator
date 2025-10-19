import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col justify-center items-center my-20'>
      <div className='text-stone-500 inline-flex text-center gap-2 bg-white py-1 px-6 rounded-full border border-neutral-500 hover:rotate-4 
      transition-all duration-700'>
        <p>Best text to image transilator </p>
        <img src={assets.star_icon} alt="star" />
      </div>
      <h1 className='text-7xl max-w-[590px] mx-auto mt-15 text-center '>Turn text to <span className='text-blue-500 hover:text-red-500 transition-colors duration-500 cursor-pointer'>image</span>, in seconds</h1>
      <p className='mt-5 text-center mx-auto max-w-xl'>
        Unleash your creativity with AI. Transform your ideas into stunning visuals instantly - just type and watch the magic happen!
      </p>

      <button onClick={() => navigate('/result')} className='flex items-center gap-2 mt-10 bg-black text-white rounded-2xl px-4 py-2 cursor-pointer hover:scale-105 transition-all duration-700'>
        Generate Image
        <img src={assets.star_group} alt="start" className='w-5'/>
      </button>
      <div className='flex items-center justify-center gap-2 mt-12 flex-wrap'>
        {Array(6).fill('').map((item,index) => (
          <img src={index%2==0 ? assets.sample_img_2 : assets.sample_img_1} key={index} alt="temp" className='h-20 rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer'/>
        ))}
      </div>

      <div className='mt-2 text-gray-600'>
        <p>Generated images from imagify </p>
      </div>
    </div>
  )
}

export default Header
