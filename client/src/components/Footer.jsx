import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex justify-between items-center gap-4 py-6'>
      <img src={assets.logo} className='w-28'/>
      <p className='flex-1 text-sm text-gray-400 max-sm:hidden ml-16 pl-8 border-l border-gray-400'>Copyright @Karthik.dev | All right reserved.</p>
      <div className='flex' >
        <img src={assets.instagram_icon} className='mx-2 cursor-pointer' />
        <img src={assets.twitter_icon} className='mx-2 cursor-pointer' />
        <img src={assets.facebook_icon} className='mx-2 cursor-pointer' />
      </div>
    </div>
  )
}

export default Footer
