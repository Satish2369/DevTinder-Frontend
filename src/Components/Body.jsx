
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import axios from 'axios'
import { BASE_URL } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addUsers } from '../utils/userSlice'
import { useEffect } from 'react'


const Body = () => {

  const dispatch = useDispatch();


  const fetchUser = async ()=>{

       try {
        
        
        const res = await axios.get(BASE_URL + "/profile/view",{
          withCredentials:true
        }
      );

      dispatch(addUsers(res?.data))


      
      }
      catch(e){
        console.error(e);
      }
   


  }

  useEffect(()=>{

    fetchUser();
  },[])


  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Body;
