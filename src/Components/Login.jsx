import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUsers } from "../utils/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLogInForm, setIsLogInForm] = useState(true);

  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
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

      // console.log(res.data)
      dispatch(addUsers(res?.data));
      return navigate("/");
    } catch (e) {
      console.error(e);
      setError(e?.response?.data || "something went wrong");
    }
  };

  const handleSignup = async () => {
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

      // console.log(res.data);
      dispatch(addUsers(res?.data?.data));
      return navigate("/profile");
    } catch (e) {
      console.error(e);
      setError(e?.response?.data || "something went wrong");
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="card bg-base-200 w-96 shadow-xl m-8 ">
        <div className="card-body">
          <h2 className=" flex justify-center text-2xl ">
            {isLogInForm ? "Login" : "Signup"}
          </h2>

          <div>
            {!isLogInForm && (
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">First Name</span>
                </div>
                <input
                  type="text"
                  value={firstName}
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </label>
            )}

            {!isLogInForm && (
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Last Name</span>
                </div>
                <input
                  type="text"
                  value={lastName}
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </label>
            )}

            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Email Id</span>
              </div>
              <input
                type="text"
                value={emailId}
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setEmailId(e.target.value)}
              />
            </label>

            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                value={password}
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <p className="text-red-500">{error}</p>

          <div>
            {!isLogInForm && (
              <>
                <div className="flex gap-2 cursor-pointer items-center">
                  <input type="checkbox" className="w-4 h-4" />
                  <h3>
                    I accept to the{" "}
                    <Link to="/termsncondition" className="text-blue-400">
                      terms and conditions.
                    </Link>
                  </h3>
                </div>
              </>
            )}
          </div>
          <div className="card-actions justify-center m-3">
            <button
              className="btn btn-primary w-[21vw] text-xl"
              onClick={isLogInForm ? handleLogin : handleSignup}
            >
              {isLogInForm ? "Login" : "Signup"}
            </button>
            <div
              className="text-white  cursor-pointer m-1 p-1"
              onClick={() => setIsLogInForm((prev) => !prev)}
            >
              {isLogInForm ? "New User ? Signup" : "Old User ? want to login"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
