import React from 'react'
import { assets, testimonialsData } from '../assets/assets'

const Testimonials = () => {
  return (
    <div className='flex flex-col items-center justify-center py-12'>
      <h1 className='text-4xl font-bold'>Customer Testimonials</h1>
      <p className='text-gray-500 mt-3 mb-16'>What Our Users are saying ? </p>

      <div className='flex flex-wrap gap-6'>
        {testimonialsData.map((testimonial,index) => (
          <div key={index} className='bg-white/20 p-12 rounded-lg shadow-md w-80 hover:scale-[1.02] transition-all duration-500 cursor-pointer'>
            <div className='flex flex-col items-center p-5 gap-2'>
              <img src={testimonial.image} className='rounded-lg w-14'/>
              <h2 className='text-xl font-semibold mt-3'>{testimonial.name}</h2>
              <p className='text-gray-500 mb-4'>{testimonial.role}</p>
              <div className='flex'>
                {Array(testimonial.stars).fill().map((item,index) => (
                  <img src={assets.rating_star} key={index} />
                ))}
              </div>
              <p className='text-center text-xs text-gray-600'>{testimonial.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
