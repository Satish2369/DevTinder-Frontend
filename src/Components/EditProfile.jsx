// filepath: c:\Users\satis\Desktop\DevTinder\Frontend\src\Components\EditProfile.jsx
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
  const [age, setAge] = useState(user?.age || "");
  const [gender, setGender] = useState(user?.gender || "");
  const [about, setAbout] = useState(user?.about);
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const saveProfile = async () => {
    setError("");

    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        {
          firstName,
          lastName,
          age,
          gender,
          photoUrl,
          about,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      dispatch(addUsers(res?.data?.data));
      toast.success("Profile saved successfully", {
        position: "top-right",
        autoClose: 1000,
        style: { backgroundColor: "#8B5CF6", color: "white" },
      });
    } catch (err) {
      setError(err?.response?.data);
    }
  };

  const formFields = [
    { label: "First Name", value: firstName, setter: setFirstName, type: "text", placeholder: "Your first name" },
    { label: "Last Name", value: lastName, setter: setLastName, type: "text", placeholder: "Your last name" },
    { label: "Photo URL", value: photoUrl, setter: setPhotoUrl, type: "text", placeholder: "https://example.com/photo.jpg" },
  ];

  return (
    <div className="flex justify-center items-start py-4">
      <ToastContainer />

      <div className="flex flex-col xl:flex-row gap-10 justify-center items-start w-full max-w-6xl">
        
        {/* Form Section */}
        <div className="flex-1 w-full max-w-lg">
          <div className="bg-slate-800/40 backdrop-blur-md rounded-2xl p-8 border border-violet-600/25 hover:border-red-500/40 transition-all duration-500">
            
            {/* Header */}
            <div className="flex items-center gap-4 mb-8 pb-4 border-b border-violet-500/20">
              <div className="p-3 rounded-xl bg-gradient-to-br from-red-600 to-violet-600">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Edit Details</h2>
                <p className="text-gray-400 text-sm">Update your profile information</p>
              </div>
            </div>

            {/* Dynamic Form Fields */}
            <div className="space-y-5">
              {formFields.map((field, idx) => (
                <div key={idx} className="relative">
                  <label className="text-gray-300 text-sm font-medium mb-2 block">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    value={field.value}
                    placeholder={field.placeholder}
                    className="w-full px-4 py-3 bg-slate-900/60 border border-violet-500/25 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500/70 focus:bg-slate-900/80 transition-all duration-300"
                    onChange={(e) => field.setter(e.target.value)}
                  />
                </div>
              ))}

              {/* Age & Gender Row */}
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="text-gray-300 text-sm font-medium mb-2 block">Age</label>
                  <input
                    type="number"
                    value={age}
                    placeholder="25"
                    className="w-full px-4 py-3 bg-slate-900/60 border border-violet-500/25 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500/70 transition-all duration-300"
                    onChange={(e) => setAge(e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-gray-300 text-sm font-medium mb-2 block">Gender</label>
                  <select
                    value={gender}
                    className="w-full px-4 py-3 bg-slate-900/60 border border-violet-500/25 rounded-xl text-white focus:outline-none focus:border-red-500/70 transition-all duration-300 cursor-pointer"
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option value="" className="bg-slate-900"> Choose</option>
                    <option value="Male" className="bg-slate-900"> Male</option>
                    <option value="female" className="bg-slate-900"> Female</option>
                    <option value="Other" className="bg-slate-900"> Other</option>
                  </select>
                </div>
              </div>

              {/* About Textarea */}
              <div>
                <label className="text-gray-300 text-sm font-medium mb-2 block">About</label>
                <textarea
                  value={about}
                  placeholder="Write something interesting about yourself..."
                  rows="4"
                  className="w-full px-4 py-3 bg-slate-900/60 border border-violet-500/25 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500/70 transition-all duration-300 resize-none"
                  onChange={(e) => setAbout(e.target.value)}
                />
              </div>
            </div>

            {/* Error Display */}
            {error && (
              <div className="mt-5 p-4 bg-red-500/15 border border-red-500/40 rounded-xl flex items-center gap-3">
                <svg className="w-5 h-5 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span className="text-red-300 text-sm">{error}</span>
              </div>
            )}

            {/* Save Button */}
            <button
              onClick={saveProfile}
              className="w-full mt-8 py-4 bg-gradient-to-r from-red-600 via-rose-600 to-violet-600 text-white font-bold text-lg rounded-xl hover:opacity-90 hover:shadow-xl hover:shadow-red-500/20 active:scale-[0.98] transition-all duration-300"
            >
              Save Changes
            </button>
          </div>
        </div>

        {/* Preview Section */}
        <div className="flex-1 w-full max-w-md">
          <div className="sticky top-24">
            <div className="text-center mb-6">
              <span className="inline-block px-5 py-2 bg-gradient-to-r from-red-500/15 to-violet-500/15 border border-violet-500/30 rounded-full">
                <span className="text-gray-300 text-sm font-medium">Live Preview</span>
              </span>
            </div>
            <UserCard
              user={{ firstName, lastName, age, gender, photoUrl, about }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;