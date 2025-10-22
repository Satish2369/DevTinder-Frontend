import  { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { addRequests, removeRequests } from "../utils/requestsSlice";


const Requests = () => {

  const requests = useSelector((store) => store?.requests);

  const dispatch = useDispatch();

  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });
      dispatch(addRequests(res?.data?.data));
    } catch (e) {
      console.error(e.response.data);
    }
  };

  const reviewRequest = async(status,_id)=>{
    
    try{
      const request = await axios.post(BASE_URL + "/request/review/" + status +"/" + _id,{},{withCredentials:true});
      dispatch(removeRequests(_id));
    }
    catch(e){
      console.error(e.response.data);
    }
    


  }









  useEffect(() => {
    fetchRequests();
  }, []);

  if (!requests) return;

  if (requests.length === 0)
    return <h1 className="text-center m-7 p-3 text-bold text-white ">No requests found</h1>;

  return (
    <div className=" mb-[4vw] p-5">
      <h2 className="text-bold text-3xl text-center m-5 text-white">
        Connections Requests
      </h2>

      {requests?.map((request) => {
        const { firstName, lastName, about, age, photoUrl, gender, _id } =
          request.fromUserId;

        return (
          <div key={_id} className="flex justify-center items-center m-4">
            <div className=" flex justify-between  p-[1vw] w-1/2 rounded-md bg-base-300">
              <div className="flex ml-[2vw]">
                <img
                  src={photoUrl}
                  alt="user-img"
                  className="w-[10vw] h-[10vw] rounded-full"
                />
              </div>

              <div className="flex  flex-col  justify-center ml-[3vw] w-[13vw]">
                <h2 className=" font-bold text-2xl text-white   ">
                  {" "}
                  {firstName + " " + lastName}
                </h2>
                {age && gender && (
                  <p className="  text-white ">{age + ", " + gender}</p>
                )}
                <h2 className="  text-white">{about}</h2>
              </div>

               <div className="m-[2vw] mt-[4vw] flex gap-[1vw]">
               <button className="btn btn-outline btn-primary w-[8vw]"  onClick={()=> reviewRequest("rejected",request._id)}>Reject</button>
               <button className="btn btn-outline btn-secondary w-[8vw]"  onClick={()=> reviewRequest("accepted",request._id)}>Accept</button>
               </div>


            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Requests;
