import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import { addConnection } from '../utils/connectionsSlice'
import { useDispatch, useSelector } from 'react-redux'

const Connections = () => {

  const connections  =  useSelector((store)=>store?.connections);

 const dispatch = useDispatch();
 
  const fetchConnections = async()=>{

    try{
        const res = await axios.get(BASE_URL + "/user/connections",{
            withCredentials:true
        });
        dispatch(addConnection(res?.data?.data));
    }
    catch(e){
       console.error(e.response.data)
    }

  }

 useEffect(()=>{
    fetchConnections();
 },[]);


 if(!connections) return ;


 if(connections.length===0) return <h1 className='text-center m-3 p-3 text-bold '>No connections found</h1>


  return (
    <div className='mb-[5vw] p-5'>
        <h2 className='text-bold text-3xl text-center m-5 text-white'>Connections</h2>
      
    {
      connections?.map((connection)=>{


       const {firstName,lastName,about,age,photoUrl,gender,_id} = connection;



        return (
                <div key={_id} className='flex justify-center m-4'> 
                    <div  className=' flex justify-start  p-[2vw]     w-1/2 rounded-md bg-base-300'>
                    <div className='flex ml-[2vw]'>
                    <img src={photoUrl} alt="user-img" className='w-[10vw] h-[10vw] rounded-full' />
                    </div>
              
                <div className='flex items-center flex-col ml-[3vw]'>
                <h2 className=' font-bold text-xl mb-1 text-white'> {firstName + " " + lastName}</h2>
                {age && gender && <p className='text-center  text-white text-xl'>{age  + ", " + gender}</p>}
                <h2 className='ml-[3vw] font-bold text-white' >{about}</h2>
                </div>


              </div>

                </div>


        )


      })
    }



    </div>
  )
}

export default Connections;
