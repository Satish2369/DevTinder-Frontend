
import Navbar from './Navbar'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import axios from 'axios'
import { BASE_URL } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addUsers } from '../utils/userSlice'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'



const Body = () => {



  return (
    <div className="min-h-screen flex flex-col">

    <Navbar />

    <main className="flex-grow p-2">
      <Outlet />
    </main>

   
    <Footer />
  </div>
  )
}

export default Body;
