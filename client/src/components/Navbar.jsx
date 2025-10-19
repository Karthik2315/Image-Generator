import React, { useState } from 'react'
import {assets} from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  const [user,setUser] = useState(null);
  return (
    <div className='flex items-center justify-between py-4'>
      <img src={assets.logo} alt="logo" className='w-28 cursor-pointer' onClick={() => navigate('/')}/>
      <div>
        {user ? <div>

        </div> : <div className='flex items-center gap-8'>
        <p className='cursor-pointer' onClick={() => navigate('/buy')}> Pricing </p>
        <button className='bg-zinc-800 text-white px-7 py-2 rounded-2xl'> Login </button>
        </div>}
      </div>
    </div>
  )
}

export default Navbar
