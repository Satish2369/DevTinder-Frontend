import { useSelector } from "react-redux";
import EditProfile from "./EditProfile";


const Profile = () => {

  const user = useSelector((store)=> store?.user);
  // console.log(user);

  return ( user && (
    <div className="min-h-screen">
    <EditProfile   user={user}/>
  </div>
  )
   
  )
}

export default Profile;
