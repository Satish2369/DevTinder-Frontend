import React from "react";
import { useState } from "react";
import UserCard from "./UserCard";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUsers } from "../utils/userSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [photoUrl, setPhotoUrl] = useState(user?.photoUrl);
  const [age, setAge] = useState(user?.age);
  const [gender, setGender] = useState(user?.gender);
  const [about, setAbout] = useState(user?.about);
  const [error,setError] = useState("");

  const dispatch = useDispatch();


  const saveProfile = async () =>{
     
          setError("");

      try{
        const res = await axios.patch(BASE_URL + "/profile/edit" ,{

          firstName, 
          lastName, 
          age,  
          gender, 
          photoUrl, 
          about
        },{
          headers: { "Content-Type": "application/json" }, 
        withCredentials: true
         });

        dispatch(addUsers(res?.data?.data));
        toast.success("Profile saved successfully", {
          position: "top-right",
          autoClose: 1000,
          style: { backgroundColor: "#4CAF50", color: "white" },
        });

      }
      catch(err){
        setError(err?.response?.data);
      }

  }







  return (
    <div className=" flex justify-center items-center ">
        <ToastContainer />
      <div className="  flex gap-5  justify-center items-center  w-fit bg-base-300 m-[3vw]  px-5  rounded-md">
        <div className="card  w-96 shadow-xl mt-[1vw]  bg-base-300 ">
          <div className="card-body">
            <h2 className=" flex justify-center text-2xl "> Edit Profile</h2>

            <div>
              <label className="form-control  max-w-xs">
                <div className="label">
                  <span className="label-text">First Name</span>
                </div>
                <input
                  type="text"
                  value={firstName}
                  placeholder="Type here"
                  className="input input-bordered  max-w-xs"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </label>

              <label className="form-control  max-w-xs">
                <div className="label">
                  <span className="label-text">Last Name</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  value={lastName}
                  className="input input-bordered  max-w-xs"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </label>
              <label className="form-control  max-w-xs">
                <div className="label">
                  <span className="label-text">Photo URL</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  value={photoUrl}
                  className="input input-bordered  max-w-xs"
                  onChange={(e) => setPhotoUrl(e.target.value)}
                />
              </label>

              <label className="form-control  max-w-xs">
                <div className="label">
                  <span className="label-text">Age</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  value={age}
                  className="input input-bordered  max-w-xs"
                  onChange={(e) => setAge(e.target.value)}
                />
              </label>
              <label className="form-control  max-w-xs">
                <div className="label">
                  <span className="label-text">Gender</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  value={gender}
                  className="input input-bordered  max-w-xs"
                  onChange={(e) => setGender(e.target.value)}
                />
              </label>
              <label className="form-control  max-w-xs">
                <div className="label">
                  <span className="label-text">About</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  value={about}
                  className="input input-bordered w-full max-w-xs"
                  onChange={(e) => setAbout(e.target.value)}
                />
              </label>
            </div>
            <p className="text-red-500"></p>
            <div className="card-actions justify-center flex flex-col m-5">
             <p>{error}</p>
              <button className="btn btn-primary w-[12vw] text-xl" onClick={saveProfile}>
                Save Profile
              </button>
            </div>
          </div>
        </div>

        <div className="">
          <UserCard
            user={{ firstName, lastName, age, gender, photoUrl, about }}
          />
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
