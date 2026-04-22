import React from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* ------------ Left Section ------------ */}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            SwasthyaMitra helps you discover trusted doctors, book appointments,
            and securely access your health records in one place.
          </p>
        </div>

        {/* ------------ Center Section ------------ */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>
              <NavLink to="/" className="hover:text-gray-900 transition-colors">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-gray-900 transition-colors">
                About us
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-gray-900 transition-colors">
                Contact us
              </NavLink>
            </li>
            <li>
              <NavLink to="/privacy-policy" className="hover:text-gray-900 transition-colors">
                Privacy policy
              </NavLink>
            </li>
          </ul>
        </div>

        {/* ------------ Right Section ------------ */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+977-9812345678</li>
            <li>info@swasthyamitra.com</li>
          </ul>
        </div>
      </div>

      {/* ------------ Copyright Text ------------ */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright © {new Date().getFullYear()} SwasthyaMitra - All Rights
          Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
