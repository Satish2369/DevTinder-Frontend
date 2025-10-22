import { useSelector } from "react-redux";
import EditProfile from "./EditProfile";
import useCheckUser from "../utils/customhooks/useCheckUser";


const Profile = () => {
  

  const user = useSelector((store)=> store?.user);


  return ( user && (
    <div className="min-h-screen">
    <EditProfile   user={user}/>
  </div>
  )
   
  )
}

export default Profile;
