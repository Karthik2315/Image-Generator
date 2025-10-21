import React, { useContext, useEffect } from 'react'
import { assets } from '../assets/assets'
import { useState } from 'react'
import { AppContext } from '../context/AppContext';
import { motion } from "motion/react"
import axios from 'axios';
import toast from "react-hot-toast";


const Login = () => {
  const [islogin,setIsLogin] = useState(false);
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const {setUser,setShowLogin,backendURL} = useContext(AppContext);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    }
  },[])

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      if(islogin){
        const response = await axios.post(`${backendURL}/api/user/login`,{
          email,
          password
        },{
          withCredentials:true
        });
        if(response.data.success){
          toast.success("Login Successful");
        }
      }
      else{
        const response = await axios.post(`${backendURL}/api/user/register`,{
          name,
          email,
          password
        },{
          withCredentials:true
        })
        if(response.data.success){
          toast.success("Registration Successful");
        }
      }
      const userDetails = await axios.get(`${backendURL}/api/user/me`,{
        withCredentials:true
      });
      setUser(userDetails.data.user);
      setShowLogin(false);
    }catch(err){
      console.log(err);
      toast.error(err.response.data.message);
    }
  }
  return (
    <div className=' fixed left-0 right-0 top-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
      <motion.form className='flex flex-col items-center bg-white rounded-2xl p-10 text-slate-500 relative'
      initial={{ opacity: 0.2, y: 50 }}
      transition={{ duration: 0.3 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} onSubmit={handleSubmit}>
        <h1 className='text-3xl font-bold mb-3'>{islogin ? 'Login' : 'Sign Up' }</h1>
        <p className='text-sm'>Welcome back! Please sign in to continue</p>
        {!islogin && 
        <div className='flex gap-2 items-center mt-6'>
          <img src={assets.profile_icon} className='w-8'/>
          <input type="text" placeholder='Full Name' required className='outline-none' onChange={(e) => setName(e.target.value)} value={name}/>
        </div> }

        <div className='flex gap-3 items-center mt-6'>
          <img src={assets.email_icon} className='w-5 ml-1'/>
          <input type="email" placeholder='Email' required className='outline-none pl-1' onChange={(e) => setEmail(e.target.value)} value={email}/>
        </div>

        <div className='flex gap-3 items-center mt-6 mb-6'>
          <img src={assets.lock_icon} className='w-4 ml-1'/>
          <input type="password" placeholder='Enter the password' required className='outline-none pl-1' onChange={(e) => setPassword(e.target.value)} value={password}/>
        </div>
        {islogin && 
        <div className='flex w-full'>
          <p className='text-blue-500 cursor-pointer mb-3 ml-2'>Forgot Password?</p>
        </div> }
        <button className='text-white bg-gradient-to-r from-blue-300 to-blue-700 px-8 py-2 rounded-full hover:scale-105 transition-all duration-500 cursor-pointer w-[80%]' type="submit">
          {islogin ? 'Login' : 'Create Account' }
        </button>

        { islogin ? <p className='text-sm mt-4'>
          Don't have an account? <span className='text-blue-500 cursor-pointer' onClick={() => setIsLogin(false)}>Sign Up</span>
        </p> : <p className='text-sm mt-4'>
          Already have an account? <span className='text-blue-500 cursor-pointer' onClick={() => setIsLogin(true)}>Login</span>
        </p>}
        <img src={assets.cross_icon} className='absolute top-5 right-5 cursor-pointer' onClick={() => setShowLogin(false)}/>
      </motion.form>
    </div>
  )
}

export default Login
