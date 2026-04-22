import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          PRIVACY <span className="text-gray-700 font-semibold">POLICY</span>
        </p>
      </div>

      <div className="mt-10 mb-20 text-sm text-gray-600 space-y-6 leading-6">
        <p>
          This Privacy Policy explains how SwasthyaMitra collects, uses, and
          protects your information when you use our services in Nepal.
        </p>

        <div>
          <p className="font-semibold text-gray-800">Information we collect</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Account details (such as name, phone number, email).</li>
            <li>Appointment details you submit through the platform.</li>
            <li>Technical data (such as device/browser information).</li>
          </ul>
        </div>

        <div>
          <p className="font-semibold text-gray-800">How we use information</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>To provide and improve appointments and related features.</li>
            <li>To communicate important updates and support messages.</li>
            <li>To help keep the platform secure and prevent misuse.</li>
          </ul>
        </div>

        <div>
          <p className="font-semibold text-gray-800">Contact</p>
          <p className="mt-2">
            If you have questions, contact us at{" "}
            <span className="font-medium">info@swasthyamitra.com</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
