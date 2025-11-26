import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUsers } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLogInForm, setIsLogInForm] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    setIsLoading(true);
    setError("");
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          emailId,
          password,
        },
        {
          withCredentials: true,
        }
      );

      dispatch(addUsers(res?.data));
      return navigate("/");
    } catch (e) {
      console.error(e);
      setError(e?.response?.data || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignup = async () => {
    setIsLoading(true);
    setError("");
    try {
      const res = await axios.post(
        BASE_URL + "/signup",
        {
          firstName,
          lastName,
          emailId,
          password,
        },
        {
          withCredentials: true,
        }
      );

      dispatch(addUsers(res?.data?.data));
      return navigate("/profile");
    } catch (e) {
      console.error(e);
      setError(e?.response?.data || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center px-4 py-12 bg-gray-950">
      <div className="w-full max-w-md">
        {/* Card Container */}
        <div className="bg-gray-900 rounded-xl border border-gray-800 shadow-lg">
          
          {/* Header */}
          <div className="p-6 pb-4 text-center border-b border-gray-800">
            <h2 className="text-2xl font-bold text-white">
              {isLogInForm ? "Welcome Back" : "Create Account"}
            </h2>
            <p className="text-gray-400 text-sm mt-1">
              {isLogInForm
                ? "Sign in to continue to DevConnect"
                : "Join the developer community"}
            </p>
          </div>

          {/* Form */}
          <div className="p-6 space-y-4">
            {/* First Name - Only for Signup */}
            {!isLogInForm && (
              <div>
                <label className="text-gray-300 text-sm font-medium mb-1.5 block">
                  First Name
                </label>
                <input
                  type="text"
                  value={firstName}
                  placeholder="John"
                  className="w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
            )}

            {/* Last Name - Only for Signup */}
            {!isLogInForm && (
              <div>
                <label className="text-gray-300 text-sm font-medium mb-1.5 block">
                  Last Name
                </label>
                <input
                  type="text"
                  value={lastName}
                  placeholder="Doe"
                  className="w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            )}

            {/* Email */}
            <div>
              <label className="text-gray-300 text-sm font-medium mb-1.5 block">
                Email Address
              </label>
              <input
                type="email"
                value={emailId}
                placeholder="you@example.com"
                className="w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all"
                onChange={(e) => setEmailId(e.target.value)}
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-gray-300 text-sm font-medium mb-1.5 block">
                Password
              </label>
              <input
                type="password"
                value={password}
                placeholder="••••••••"
                className="w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-3 bg-red-900/30 border border-red-800 rounded-lg">
                <span className="text-red-400 text-sm">{error}</span>
              </div>
            )}

            {/* Submit Button */}
            <button
              onClick={isLogInForm ? handleLogin : handleSignup}
              disabled={isLoading}
              className="w-full py-2.5 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>{isLogInForm ? "Signing in..." : "Creating account..."}</span>
                </>
              ) : (
                <span>{isLogInForm ? "Sign In" : "Create Account"}</span>
              )}
            </button>
          </div>

          {/* Footer */}
          <div className="p-6 pt-0 text-center">
            <p className="text-gray-400 text-sm">
              {isLogInForm ? "Don't have an account?" : "Already have an account?"}
              <button
                onClick={() => {
                  setIsLogInForm((prev) => !prev);
                  setError("");
                }}
                className="ml-1 text-white hover:underline font-medium"
              >
                {isLogInForm ? "Sign Up" : "Sign In"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;