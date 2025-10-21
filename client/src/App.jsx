import React, { useContext } from 'react'
import { Route,Routes } from 'react-router-dom'

import Home from './pages/Home'
import Result from './pages/Result'
import BuyCredit from './pages/BuyCredit'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login'
import { AppContext } from './context/AppContext'
import { Toaster } from "react-hot-toast";


const App = () => {
  const {showlogin} = useContext(AppContext);
  return (
    <div className='px-6 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50'>
      <Navbar />
      {showlogin && 
      <Login /> }
      <Toaster />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/result' element={<Result />} />
        <Route path='/buy' element={<BuyCredit />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
