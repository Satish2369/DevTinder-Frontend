import { useSelector } from "react-redux";
import EditProfile from "./EditProfile";
import useCheckUser from "../utils/customhooks/useCheckUser";

const Profile = () => {
  const user = useSelector((store) => store?.user);

  return (
    user && (
      <div
        className="min-h-screen py-12 px-6"
        style={{
          background:
            "linear-gradient(135deg, #1a0a1a 0%, #2d1b3d 50%, #1a0a2e 100%)",
        }}
      >
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-red-500 via-rose-500 to-violet-500 bg-clip-text text-transparent mb-4">
            My Profile
          </h1>
          <p className="text-gray-400 text-lg">
            Customize your profile and stand out from the crowd
          </p>
        </div>

        {/* Profile Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-r from-slate-900/90 to-violet-950/50 backdrop-blur-lg rounded-3xl p-8 border border-violet-800/30 shadow-[0_0_40px_rgba(139,92,246,0.15)]">
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r from-red-500 to-violet-500 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r from-violet-500 to-red-500 rounded-full blur-3xl opacity-20"></div>

            {/* Edit Profile Section */}
            <EditProfile user={user} />
          </div>
        </div>
      </div>
    )
  );
};

export default Profile;