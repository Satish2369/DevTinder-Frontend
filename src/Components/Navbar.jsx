import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { removeUser } from "../utils/userSlice";

const Navbar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      const userLogOut = await axios.post(
        BASE_URL + "/logout",
        {},
        {
          withCredentials: true,
        }
      );
      dispatch(removeUser());
      console.log(userLogOut);
    } catch (e) {
      console.error(e);
    }
  };

  const handleClickPremium = async () => {
    navigate("/premium");
  };

  return (
    <div className="sticky top-0 z-50">
      <div 
        className="navbar px-6 py-3 backdrop-blur-lg border-b border-violet-500/20"
        style={{ background: 'linear-gradient(135deg, rgba(26,10,26,0.95) 0%, rgba(45,27,61,0.95) 50%, rgba(26,10,46,0.95) 100%)' }}
      >
        {/* Logo Section */}
        <div className="flex-1">
          <Link 
            to="/" 
            className="flex items-center gap-2 group transition-all duration-300 hover:scale-105"
          >
            <div className="h-12 w-48 overflow-hidden rounded-lg">
              <img 
                src="/images/logo.png" 
                alt="Devconnect" 
                className="h-full w-full object-cover group-hover:brightness-110 transition-all duration-300" 
              />
            </div>
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex-none gap-4">
          {user && (
            <div className="flex items-center gap-4">
              {/* Welcome Text */}
              <div className="hidden md:flex items-center gap-2">
                <span className="text-gray-400">Welcome,</span>
                <span className="font-semibold bg-gradient-to-r from-red-400 to-violet-400 bg-clip-text text-transparent">
                  {user.firstName}
                </span>
                {user.isPremium && (
                  <span className="px-2 py-0.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold rounded-full animate-pulse">
                    PRO
                  </span>
                )}
              </div>

              {/* Avatar Dropdown */}
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar ring-2 ring-violet-500/50 hover:ring-red-500 transition-all duration-300"
                >
                  <div className="w-10 rounded-full overflow-hidden">
                    <img
                      alt="Profile"
                      src={user.photoUrl}
                      className="hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Dropdown Menu */}
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-4 w-56 p-3 rounded-xl shadow-2xl border border-violet-500/30 backdrop-blur-xl z-50"
                  style={{ background: 'linear-gradient(135deg, rgba(26,10,26,0.98) 0%, rgba(45,27,61,0.98) 100%)' }}
                >
                  {/* Profile Link */}
                  <li>
                    <Link 
                      to="/profile" 
                      className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-violet-500/20 transition-all duration-300 group"
                    >
                      <svg className="w-5 h-5 text-violet-400 group-hover:text-red-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span className="text-gray-200 group-hover:text-white">Profile</span>
                      <span className="ml-auto px-2 py-0.5 bg-gradient-to-r from-red-500 to-violet-500 text-white text-xs font-bold rounded-full">
                        New
                      </span>
                    </Link>
                  </li>

                  {/* Connections Link */}
                  <li>
                    <Link 
                      to="/connections" 
                      className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-violet-500/20 transition-all duration-300 group"
                    >
                      <svg className="w-5 h-5 text-violet-400 group-hover:text-red-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                      <span className="text-gray-200 group-hover:text-white">Connections</span>
                    </Link>
                  </li>

                  {/* Requests Link */}
                  <li>
                    <Link 
                      to="/requests" 
                      className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-violet-500/20 transition-all duration-300 group"
                    >
                      <svg className="w-5 h-5 text-violet-400 group-hover:text-red-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                      </svg>
                      <span className="text-gray-200 group-hover:text-white">Requests</span>
                    </Link>
                  </li>

                  {/* Divider */}
                  <div className="my-2 border-t border-violet-500/30"></div>

                  {/* Premium Link */}
                  <li>
                    <Link 
                      to="/premium" 
                      onClick={handleClickPremium}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg bg-gradient-to-r from-amber-500/10 to-orange-500/10 hover:from-amber-500/20 hover:to-orange-500/20 transition-all duration-300 group"
                    >
                      <svg className="w-5 h-5 text-amber-400 group-hover:text-amber-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                      <span className="text-amber-300 group-hover:text-amber-200 font-medium">Premium</span>
                    </Link>
                  </li>

                  {/* Divider */}
                  <div className="my-2 border-t border-violet-500/30"></div>

                  {/* Logout Link */}
                  <li>
                    <Link 
                      to="/login" 
                      onClick={handleClick}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-500/20 transition-all duration-300 group"
                    >
                      <svg className="w-5 h-5 text-red-400 group-hover:text-red-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                      <span className="text-red-400 group-hover:text-red-300">Logout</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;