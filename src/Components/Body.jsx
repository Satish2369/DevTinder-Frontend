
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

  const dispatch = useDispatch();
  const  navigate = useNavigate();
  const userData = useSelector((store)=>store.user);



  const fetchUser = async ()=>{

      if(userData) return ;

       try {
        
        
        const res = await axios.get(BASE_URL + "/profile/view",{
          withCredentials:true
        }
      );

      dispatch(addUsers(res?.data))


      
      }
      catch(e){
        if(e.status=== 401){
         return  navigate("/login");
        }
        console.error(e);
      }
   


  }

  useEffect(()=>{
 
      fetchUser();
    
  },[])


  return (
    <div className="min-h-screen flex flex-col">
    {/* Navbar */}
    <Navbar />

    {/* Main Content (Outlet) */}
    <main className="flex-grow p-4">
      <Outlet />
    </main>

    {/* Footer */}
    <Footer />
  </div>
  )
}

export default Body;
