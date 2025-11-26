import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
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

  const reviewRequest = async (status, _id) => {
    try {
      await axios.post(
        BASE_URL + "/request/review/" + status + "/" + _id,
        {},
        { withCredentials: true }
      );
      dispatch(removeRequests(_id));
    } catch (e) {
      console.error(e.response.data);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  if (!requests) return null;

  if (requests.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center">
        <div className="text-7xl mb-6">📭</div>
        <h1 className="text-3xl font-bold text-white mb-3">No Requests Found</h1>
        <p className="text-gray-400">When someone sends you a request, it will appear here.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-6">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-3">Connection Requests</h1>
        <div className="flex items-center justify-center gap-2">
          <span className="w-3 h-3 bg-white rounded-full"></span>
          <p className="text-gray-400 text-lg">
            {requests.length} pending request{requests.length > 1 ? "s" : ""}
          </p>
        </div>
      </div>

      {/* Requests Container */}
      <div className="max-w-3xl mx-auto space-y-5">
        {requests?.map((request) => {
          const { firstName, lastName, about, age, photoUrl, gender, _id } =
            request.fromUserId;

          return (
            <div
              key={_id}
              className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row items-center gap-6">
                {/* Profile Image */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-xl overflow-hidden border-2 border-gray-700">
                    <img
                      src={photoUrl}
                      alt={firstName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* User Info */}
                <div className="flex-grow text-center md:text-left">
                  <h2 className="text-xl font-bold text-white mb-1">
                    {firstName} {lastName}
                  </h2>

                  {(age || gender) && (
                    <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-2">
                      {age && (
                        <span className="px-2.5 py-0.5 bg-gray-800 text-gray-300 rounded-md text-sm">
                          {age} years
                        </span>
                      )}
                      {gender && (
                        <span className="px-2.5 py-0.5 bg-gray-800 text-gray-300 rounded-md text-sm capitalize">
                          {gender}
                        </span>
                      )}
                    </div>
                  )}

                  {about && (
                    <p className="text-gray-400 text-sm line-clamp-2">{about}</p>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 flex-shrink-0">
                  <button
                    onClick={() => reviewRequest("rejected", request._id)}
                    className="px-6 py-2.5 bg-gray-800 hover:bg-red-500/20 border border-gray-700 hover:border-red-500/50 text-gray-300 hover:text-red-400 font-medium rounded-lg transition-all duration-300 flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Reject
                  </button>
                  <button
                    onClick={() => reviewRequest("accepted", request._id)}
                    className="px-6 py-2.5 bg-white hover:bg-gray-200 text-black font-medium rounded-lg transition-all duration-300 flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Accept
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Requests;
