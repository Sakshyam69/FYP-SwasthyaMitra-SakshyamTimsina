import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { AppContext } from "../context/AppContext";

const HospitalMenu = () => {
  const { backendUrl } = useContext(AppContext);
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    const getTopHospitals = async () => {
      try {
        const { data } = await axios.get(`${backendUrl}/api/hospital/top`, {
          params: { limit: 7 },
        });
        if (data.success) setHospitals(data.hospitals || []);
      } catch (error) {
        console.error("Top hospital fetch error:", error);
      }
    };

    getTopHospitals();
  }, [backendUrl]);

  return (
    <div className="flex flex-col items-center gap-4 py-16 text-gray-800" id="hospital">
      <h1 className="text-3xl font-medium">Find by Hospital</h1>
      <p className="sm:w-1/2 text-center text-sm">
        Browse top hospitals and open details to see available doctors and location.
      </p>
      <div className="flex sm:justify-center gap-4 pt-5 w-full overflow-x-auto overflow-y-hidden">
        {hospitals.map((hospital) => (
          <Link
            key={hospital._id}
            to={`/hospital/${hospital._id}`}
            onClick={() => scrollTo(0, 0)}
            className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500"
          >
            <div className="w-16 sm:w-24 h-16 sm:h-24 rounded-full overflow-hidden bg-emerald-100 mb-2">
              {hospital.image ? (
                <img
                  className="w-full h-full object-cover"
                  src={hospital.image}
                  alt={hospital.name}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-emerald-700 text-sm font-semibold">
                  H
                </div>
              )}
            </div>
            <p className="text-center w-24 sm:w-28 line-clamp-2">{hospital.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HospitalMenu;
