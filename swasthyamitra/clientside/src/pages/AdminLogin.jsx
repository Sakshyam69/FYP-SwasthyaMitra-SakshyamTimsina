import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const { backendUrl } = useContext(AppContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("admin@swasthyamitra.com");
  const [password, setPassword] = useState("admin123");

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      const { data } = await axios.post(backendUrl + "/api/admin/login", {
        email,
        password,
      });
      
      if (data.success) {
        localStorage.setItem("adminToken", data.token);
        toast.success("Login successful");
        console.log("Navigating to /admin-dashboard");
        setTimeout(() => {
          navigate("/admin-dashboard", { replace: true });
        }, 500);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      const msg = error.response?.data?.message || error.message || "Something went wrong";
      toast.error(msg);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
        <p className="text-2xl font-semibold">Admin Login</p>
        <p>Please login to access admin panel</p>

        <div className="w-full">
          <p>Email</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>
        
        <div className="w-full">
          <p>Password</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>
        
        <button
          type="submit"
          className="bg-primary text-white w-full py-2 rounded-md text-base"
        >
          Login
        </button>
        
        <p>
          <span
            onClick={() => navigate("/login")}
            className="text-primary underline cursor-pointer"
          >
            User Login
          </span>
        </p>
      </div>
    </form>
  );
};

export default AdminLogin;
