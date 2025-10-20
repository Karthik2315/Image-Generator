import React, { useContext } from 'react'
import {assets} from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext.jsx'

const Navbar = () => {
  const navigate = useNavigate();
  const {user,setShowLogin} = useContext(AppContext);
  return (
    <div className='flex items-center justify-between py-4'>
      <img src={assets.logo} alt="logo" className='w-28 cursor-pointer' onClick={() => navigate('/')}/>
      <div>
        {user ? <div className='flex items-center gap-2'>
          <button className='flex items-center gap-2 bg-blue-100 px-4 py-1.5 rounded-full hover:scale-105 transition-all duration-700'>
            <img src={assets.credit_star} alt="credit" />
            <p className='text-xs text-gray-600'>Credits Left : 50</p>
          </button>
          <p className='text-gray-600 pl-4'>Hi, Karthik</p>
          <div className='group relative' >
            <img src={assets.profile_icon} alt="profile" className='w-10 drop-shadow'/>
            <div className='absolute hidden group-hover:block text-black rounded pt-4'>
              <ul className='list-none m-0 p-2 bg-white rounded-md  text-sm ring-2 ring-blue-200'>
                <li className='py-1 px-2 cursor-pointer'>LogOut</li>
              </ul>
            </div>
          </div>
        </div> : <div className='flex items-center gap-8'>
        <p className='cursor-pointer' onClick={() => navigate('/buy')}> Pricing </p>
        <button className='bg-zinc-800 text-white px-7 py-2 rounded-2xl cursor-pointer' onClick={() => setShowLogin(true)}> Login </button>
        </div>}
      </div>
    </div>
  )
}

export default Navbar
