
import React from 'react'
import { BASE_URL } from '../utils/constants';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { removeUserFromFeed } from '../utils/feedSlice';

const UserCard = ({user}) => {

   const dispatch = useDispatch();

   const {firstName,lastName,photoUrl,about,skills,age,gender,_id} = user;
    

   
   const  handleSendRequest = async(status,userId)=>{
    try{
      const res = await axios.post(BASE_URL + "/request/send/"+ status + "/" + userId,{},{
        withCredentials:true
      });

      
     dispatch(removeUserFromFeed(userId));


    }
    catch(e){
       console.error(e);
    }
   }
   


   


  return (
    <div className=' h-[28vw]  '>
      <div className="card card-compact bg-base-300 w-[24vw] shadow-xl  p-2">
  <figure>
     <img
      src={photoUrl}
      alt="user_img"
      className='w-[18vw] h-[16vw] rounded-md'
      />   
  </figure>
   <div className="card-body">
    <h2  className="text-center text-bold text-white text-2xl" >{firstName + " " + lastName}</h2>
     {age && gender && <p className='text-center text-bold text-white text-2xl'>{age  + ", " + gender}</p>}
    <p className=' text-bold text-white text-xl text-center '>{about}</p>
    <div className="card-actions justify-center m-2">
      <button className="btn text-white bg-green-600" onClick={()=> handleSendRequest("interested",_id)}>Interested</button>
      <button className="btn  text-white bg-red-600" onClick={()=> handleSendRequest("ignored",_id)}>Ignore</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default UserCard;
