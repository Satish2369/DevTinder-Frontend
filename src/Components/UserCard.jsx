import { BASE_URL } from '../utils/constants';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { removeUserFromFeed } from '../utils/feedSlice';

const UserCard = ({ user }) => {

  const dispatch = useDispatch();

  const { firstName, lastName, photoUrl, about, skills, age, gender, _id } = user;

  const handleSendRequest = async (status, userId) => {
    try {
      const res = await axios.post(BASE_URL + "/request/send/" + status + "/" + userId, {}, {
        withCredentials: true
      });

      dispatch(removeUserFromFeed(userId));

    }
    catch (e) {
      console.error(e);
    }
  }

  return (
    <div className="flex justify-center items-center py-8">
      <div className="w-80 bg-gradient-to-br from-slate-900 via-slate-850 to-violet-950/80 rounded-2xl overflow-hidden border border-violet-500/20 hover:border-red-500/40 transition-all duration-500 shadow-xl hover:shadow-violet-500/10">

        {/* Image Section */}
        <div className="relative h-72 overflow-hidden">
          <img
            src={photoUrl || "https://api.dicebear.com/7.x/avataaars/svg?seed=default"}
            alt={firstName}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>

          {/* Bottom Info */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h2 className="text-xl font-bold text-white">
              {firstName} {lastName}
              {age && <span className="text-lg font-normal text-gray-300 ml-1">, {age}</span>}
            </h2>

            {gender && (
              <span className="inline-block mt-2 px-2.5 py-0.5 bg-red-500/20 text-red-300 text-xs font-medium rounded-md capitalize border border-red-500/30">
                {gender}
              </span>
            )}
          </div>
        </div>

        {/* About Section */}
        <div className="p-4 border-t border-violet-500/10">
          {about ? (
            <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
              {about}
            </p>
          ) : (
            <p className="text-gray-500 text-xs italic">
              No bio added yet...
            </p>
          )}

          {/* Skills Section */}
          {skills && skills.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-3">
              {skills.slice(0, 3).map((skill, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 bg-violet-500/15 text-violet-300 text-xs rounded-md border border-violet-500/20"
                >
                  {skill}
                </span>
              ))}
              {skills.length > 3 && (
                <span className="px-2 py-0.5 text-gray-400 text-xs">
                  +{skills.length - 3} more
                </span>
              )}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 p-4 pt-0">
          {/* Ignore Button */}
          <button
            onClick={() => handleSendRequest("ignored", _id)}
            className="flex-1 py-2.5 bg-slate-800/60 hover:bg-red-500/15 border border-slate-700/50 hover:border-red-500/40 rounded-lg transition-all duration-300"
          >
            <div className="flex items-center justify-center gap-1.5">
              <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span className="text-red-400 font-medium text-sm">Ignore</span>
            </div>
          </button>

          {/* Interested Button */}
          <button
            onClick={() => handleSendRequest("interested", _id)}
            className="flex-1 py-2.5 bg-gradient-to-r from-red-600 to-violet-600 hover:from-red-500 hover:to-violet-500 rounded-lg transition-all duration-300"
          >
            <div className="flex items-center justify-center gap-1.5">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="text-white font-medium text-sm">Interested</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default UserCard;