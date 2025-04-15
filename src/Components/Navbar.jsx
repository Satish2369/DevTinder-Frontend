import axios from 'axios';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';
import { removeUser } from '../utils/userSlice';




const Navbar = () => {


  const user = useSelector((store)=>store.user);
  const dispatch = useDispatch();

  // console.log(user);

  const handleClick = async () => {


    try{
          
      const userLogOut = await axios.post(BASE_URL + "/logout",{},{
        withCredentials:true
      })
      dispatch(removeUser());

      console.log(userLogOut);
    }
    catch(e){

      console.error(e);
    }
  }
  



  


  return (
    <div>
       <div className="navbar bg-base-300">
  <div className="flex-1">
    <Link  to="/" className="btn btn-ghost text-xl"><img src="Group 12.png" alt="logo"  className='w-44 h-10' /></Link>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">

    </div>
    {user && (
      
         <div className='flex items-center'> 
   <div>Welcome, {user.firstName}</div>

  
   <div className="dropdown dropdown-end mx-5">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full ">
          <img
            alt="Tailwind CSS Navbar component"
            src={user.photoUrl}
             />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <Link  to="/profile" className="justify-between">
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li>
          <Link to="/connections">Connections</Link>
          </li>
          <li>
          <Link to="/requests">Requests</Link>
          </li>
        <li><Link to="/login" onClick={handleClick}>Logout</Link></li>
      </ul>
    </div>









         </div>
       
    )
    }
  </div>
</div>
    </div>
  )
}

export default Navbar
