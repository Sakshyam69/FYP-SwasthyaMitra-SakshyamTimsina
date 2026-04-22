import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { getDoctorImage } from "../utils/doctorImages";

const AdminDashboard = () => {
  const { backendUrl } = useContext(AppContext);
  const navigate = useNavigate();
  const [dashboardData, setDashboardData] = useState(null);
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const token = localStorage.getItem("adminToken");
        if (!token) {
          navigate("/admin/login");
          return;
        }

        const [dashRes, doctorsRes] = await Promise.all([
          axios.get(backendUrl + "/api/admin/dashboard", { headers: { token } }),
          axios.post(backendUrl + "/api/admin/all-doctors", {}, { headers: { token } })
        ]);

        if (dashRes.data.success) {
          setDashboardData(dashRes.data.dashData);
        } else {
          toast.error(dashRes.data.message);
          navigate("/admin/login");
          return;
        }

        if (doctorsRes.data.success) {
          setDoctors(doctorsRes.data.doctors);
        }
      } catch (error) {
        const msg = error.response?.data?.message || error.message || "Failed to load dashboard";
        toast.error(msg);
        navigate("/admin/login");
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [backendUrl, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
    toast.success("Logged out successfully");
  };

  if (loading) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <p className="text-gray-500">Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-medium text-gray-900">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      {dashboardData && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow border">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Total Doctors</h2>
            <p className="text-3xl font-bold text-blue-600">{dashboardData.doctors}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Total Patients</h2>
            <p className="text-3xl font-bold text-green-600">{dashboardData.patients}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Total Appointments</h2>
            <p className="text-3xl font-bold text-purple-600">{dashboardData.appointments}</p>
          </div>
        </div>
      )}

      <div className="bg-white p-6 rounded-lg shadow border mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Doctors List</h2>
        {doctors.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {doctors.map((doctor, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded">
                <img 
                  src={getDoctorImage(doctor.image)} 
                  alt={doctor.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-medium truncate">{doctor.name}</p>
                  <p className="text-sm text-gray-600">{doctor.speciality}</p>
                  <p className="text-xs text-gray-500">{doctor.degree}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No doctors found</p>
        )}
      </div>

      <div className="bg-white p-6 rounded-lg shadow border">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Latest Appointments</h2>
        {dashboardData?.latestAppointments?.length > 0 ? (
          <div className="space-y-3">
            {dashboardData.latestAppointments.map((apt, index) => (
              <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <div>
                  <p className="font-medium">{apt.userData?.name || 'Unknown Patient'}</p>
                  <p className="text-sm text-gray-600">Dr. {apt.docData?.name || 'Unknown Doctor'}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm">{apt.slotDate}</p>
                  <p className="text-sm">{apt.slotTime}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No appointments found</p>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
