import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import { BASE_URL } from '../constants';
import { addUsers } from '../userSlice';
import { useNavigate } from 'react-router-dom';

const useCheckUser = () => {
  const userData = useSelector((store) => store?.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Async function to check if user is logged in
  const isUser = async () => {
    if (userData) return;  // If user is already in store, no need to fetch again

    try {
      const res = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true
      });

      // Dispatch the user data to the Redux store
      dispatch(addUsers(res?.data));
    } catch (e) {
      if (e?.response?.status === 401) {
        // Redirect to login page if not authenticated
        navigate("/login");
      }
      console.error(e);
    }
  }

  useEffect(() => {
    isUser();  // Call the async function inside useEffect
  }, [userData]);  // Re-run useEffect only when userData changes

};

export default useCheckUser;
