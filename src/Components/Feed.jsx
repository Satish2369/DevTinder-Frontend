import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addFeed } from '../utils/feedSlice'
import UserCard from  "./UserCard"


const Feed = () => {

   const dispatch = useDispatch();
   const feed = useSelector((store)=>store.feed);

  //  console.log(feed);
  const fetchFeed = async()=>{

    try {
       if(feed) return ;
       const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      
      dispatch(addFeed(res?.data?.data));
    }
    catch(e){
      console.error(e);
    }
  }


  useEffect(()=>{
    fetchFeed();
  },[]);


  return ( feed &&(
<div className='flex justify-center items-center m-9 '>
      <UserCard  user={feed[0]}/>
  
</div>
  )
    
  )
}

export default Feed;
