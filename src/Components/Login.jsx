import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUsers } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {


  const[emailId,setEmailId] = useState("satishmourya410@gmail.com");
  const[password,setPassword] = useState("Mourya@123");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
   const handleLogin = async () =>{

        try {
              
       const res = await axios.post( BASE_URL + "/login",{
        emailId,
        password

      },{
        withCredentials:true
      }
    )

         dispatch(addUsers(res?.data));
         return navigate("/");

        }
        catch(e){
          console.error("ERROR : " + e.message);
        }


   }





  return (
    <div className="flex justify-center items-center">
      <div className="card bg-base-200 w-96 shadow-xl m-10 ">
        <div className="card-body">
          <h2 className=" flex justify-center text-2xl ">Login</h2>

          <div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Email Id</span>
              </div>
              <input
                type="text"
                value={emailId}
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                onChange={(e)=> setEmailId(e.target.value)}
              />
            </label>

            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                value={password}
                className="input input-bordered w-full max-w-xs"
                onChange={(e)=> setPassword(e.target.value)}
              />
            </label>
          </div>

          <div className="card-actions justify-center m-5">
            <button className="btn btn-primary w-[12vw] text-xl"  onClick={handleLogin}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
