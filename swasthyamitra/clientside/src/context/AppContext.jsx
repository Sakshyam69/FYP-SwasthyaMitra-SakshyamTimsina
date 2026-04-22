import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const currencySymbol = "₨. ";
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [doctors, setDoctors] = useState([]);
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : false
  );
  const [userData, setUserData] = useState(false);

  const getDoctorsData = async (retryCount = 0) => {
    try {
      const { data } = await axios.get(backendUrl + "/api/doctor/list", {
        params: { page: 1, limit: 50 }, // Reduced limit for faster loading
        timeout: 12000 // 12 second timeout
      });
      if (data.success) {
        setDoctors(data.doctors);
      } else {
        toast.error(data.message || "Could not load doctors");
      }
    } catch (error) {
      console.log('Doctors data fetch error:', error);
      const msg = error.response?.data?.message || error.message || "";
      const retryAfter = error.response?.data?.retryAfter || 5;
      const isTimeout = /timed out|buffer|ECONNREFUSED|Network Error|Service temporarily unavailable/i.test(msg);
      
      if (isTimeout && retryCount < 3) {
        // Exponential backoff: 2s, 4s, 8s
        const delay = Math.min(2000 * Math.pow(2, retryCount), 8000);
        setTimeout(() => getDoctorsData(retryCount + 1), delay);
      } else if (isTimeout) {
        toast.error(`Service temporarily unavailable. Please try again in ${retryAfter} seconds.`);
      } else {
        toast.error(msg || "Could not load doctors");
      }
    }
  };

  const loadUserProfileData = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/user/get-profile", {
        headers: { token },
      });
      if (data.success) {
        setUserData(data.user);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const value = {
    doctors,
    getDoctorsData,
    currencySymbol,
    token,
    setToken,
    backendUrl,
    userData,
    setUserData,
    loadUserProfileData,
  };

  // Don't load doctor list on app load — it hits the DB and can timeout.
  // Doctor list is loaded when user visits Appointment page (or other pages that need it).
  // useEffect(() => { getDoctorsData(); }, []);

  useEffect(() => {
    if (token) {
      loadUserProfileData();
    } else {
      setUserData(false);
    }
  }, [token]);

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
