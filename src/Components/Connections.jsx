import axios from 'axios'
import { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import { addConnection } from '../utils/connectionsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Connections = () => {

  const connections = useSelector((store) => store?.connections);
  const dispatch = useDispatch();

  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true
      });
      dispatch(addConnection(res?.data?.data));
    }
    catch (e) {
      console.error(e.response.data)
    }
  }

  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connections) return null;

  if (connections.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center">
        <div className="text-7xl mb-6 animate-bounce">🔍</div>
        <h1 className="text-3xl font-bold text-white mb-3">No Connections Found</h1>
        <p className="text-gray-400 mb-6">Start exploring to find amazing developers!</p>
        <Link to="/" className="btn btn-primary btn-lg">Explore Now</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-6" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)' }}>
      
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent mb-4">
          My Connections
        </h1>
        <div className="flex items-center justify-center gap-2">
          <span className="w-3 h-3 bg-gradient-to-r from-red-500 to-violet-500 rounded-full"></span>
          <p className="text-gray-300 text-lg">{connections.length} Developer{connections.length > 1 ? 's' : ''} Connected</p>
        </div>
      </div>

      {/* Connections Container */}
      <div className="max-w-5xl mx-auto space-y-6">
        {connections?.map((connection, index) => {
          const { firstName, lastName, about, age, photoUrl, gender, _id } = connection;

          return (
            <div
              key={_id}
              className="relative bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-lg rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Decorative gradient border on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>

              <div className="flex flex-col md:flex-row items-center gap-6">
                
                {/* Profile Image Section */}
                <div className="relative flex-shrink-0">
                  <div className="w-32 h-32 rounded-2xl overflow-hidden border-4 border-purple-500/30 group-hover:border-purple-500 transition-all duration-300">
                    <img
                      src={photoUrl}
                      alt={firstName}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* User Info Section */}
                <div className="flex-grow text-center md:text-left">
                  <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {firstName} {lastName}
                  </h2>
                  
                  <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-3">
                    {age && (
                      <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-medium">
                        {age} years
                      </span>
                    )}
                    {gender && (
                      <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm font-medium capitalize">
                        {gender}
                      </span>
                    )}
                  </div>

                  {about && (
                    <p className="text-gray-400 text-sm leading-relaxed max-w-md line-clamp-2">
                      "{about}" 
                    </p>
                  )}
                </div>

                {/* Chat Button */}
                <div className="flex-shrink-0">
                  <Link to={"/chat/" + _id}>
                    <button className="relative px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl overflow-hidden group/btn hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
                      <span className="relative z-10 flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        Chat
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  </Link>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Connections;