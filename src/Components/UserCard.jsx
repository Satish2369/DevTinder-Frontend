
import React from 'react'

const UserCard = ({user}) => {

   const {firstName,lastName,photoUrl,about,skills,age,gender} = user;
  //  console.log(age);

  return (
    <div className=' h-[30vw] '>
      <div className="card card-compact bg-base-300 w-[24vw] shadow-xl  p-4">
  <figure>
    <img
      src={photoUrl}
      alt="user_img"
      className='w-[20vw] h-[20vw] rounded-md'
      />   
  </figure>
   <div className="card-body">
    <h2  className="text-center text-bold text-white text-2xl" >{firstName + " " + lastName}</h2>
     {age && gender && <p className='text-center text-bold text-white text-2xl'>{age  + ", " + gender}</p>}
    <p className='text-center text-bold text-white text-2xl '>{about}</p>
    <div className="card-actions justify-center m-4">
      <button className="btn text-white bg-green-600">Interested</button>
      <button className="btn  text-white bg-red-600">Ignore</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default UserCard;
