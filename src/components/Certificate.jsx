import React, { useState } from 'react';
import { Transition } from '@headlessui/react';

const CertificationPage = () => {
  const [activePage, setActivePage] = useState('get'); // Default page is Get Certificate
  const [isVerified, setIsVerified] = useState(false);
  const [verificationData, setVerificationData] = useState({
    name: '',
    certificateNumber: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVerificationData({ ...verificationData, [name]: value });
  };

  const handleVerify = () => {
    if (verificationData.name && verificationData.certificateNumber) {
      setIsVerified(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* Transition between Get Certificate and Verify Certificate */}
      <Transition
        show={activePage === 'get'}
        enter="transform transition duration-700"
        enterFrom="translate-x-full opacity-0"
        enterTo="translate-x-0 opacity-100"
        leave="transform transition duration-700"
        leaveFrom="translate-x-0 opacity-100"
        leaveTo="-translate-x-full opacity-0"
        className="absolute w-full h-full"
      >
        {/* Get Certificate Page */}
        <div className="flex flex-col items-center justify-center h-screen w-full bg-white p-10">
          <h1 className="text-4xl font-bold mb-8 text-transparent bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-center">
            Get Your Certificate
          </h1>
          <div className="bg-gray-50 p-10 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Download Certificate</h2>
            <p className="text-gray-600 mb-6">Enter your registration or contact number to download your course certificate.</p>
            <input
              type="text"
              placeholder="Registration/Contact Number"
              className="w-full p-3 text-lg border-2 border-gray-300 rounded-lg focus:border-blue-400 focus:outline-none mb-4"
            />
            <button className="w-full p-3 bg-blue-500 text-white text-lg font-bold rounded-lg hover:bg-blue-600 transition duration-300">
              Download Certificate
            </button>
          </div>
          <button
            onClick={() => setActivePage('verify')}
            className="mt-8 p-3 bg-gray-300 text-lg rounded-lg hover:bg-gray-400 transition duration-300"
          >
            Go to Verify Certificate
          </button>
        </div>
      </Transition>

      <Transition
        show={activePage === 'verify'}
        enter="transform transition duration-700"
        enterFrom="-translate-x-full opacity-0"
        enterTo="translate-x-0 opacity-100"
        leave="transform transition duration-700"
        leaveFrom="translate-x-0 opacity-100"
        leaveTo="translate-x-full opacity-0"
        className="absolute w-full h-full"
      >
        {/* Verify Certificate Page */}
        <div className="flex flex-col items-center justify-center h-screen w-full bg-white p-10">
          <h1 className="text-4xl font-bold mb-8 text-transparent bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-center">
            Verify Certificate
          </h1>
          <div className="bg-gray-50 p-10 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Verify Certificate</h2>
            <p className="text-gray-600 mb-6">Enter your name and certificate number to verify your course certificate.</p>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={verificationData.name}
              onChange={handleInputChange}
              className="w-full p-3 text-lg border-2 border-gray-300 rounded-lg focus:border-blue-400 focus:outline-none mb-4"
            />
            <input
              type="text"
              name="certificateNumber"
              placeholder="Certificate Number"
              value={verificationData.certificateNumber}
              onChange={handleInputChange}
              className="w-full p-3 text-lg border-2 border-gray-300 rounded-lg focus:border-blue-400 focus:outline-none mb-4"
            />
            <button
              onClick={handleVerify}
              className="w-full p-3 bg-blue-500 text-white text-lg font-bold rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Verify Certificate
            </button>

            {/* Display Verified Certificate */}
            {isVerified && (
              <div className="mt-6 p-4 bg-green-100 rounded-lg border-l-4 border-green-600">
                <h4 className="font-bold text-green-700 text-lg mb-2">✅ Certificate Verified</h4>
                <p><strong>Name:</strong> {verificationData.name}</p>
                <p><strong>Certificate Number:</strong> {verificationData.certificateNumber}</p>
                <p><strong>Course:</strong> Full-Stack Development</p>
                <p><strong>Date:</strong> 20th September 2024</p>
              </div>
            )}
          </div>
          <button
            onClick={() => setActivePage('get')}
            className="mt-8 p-3 bg-gray-300 text-lg rounded-lg hover:bg-gray-400 transition duration-300"
          >
            Go to Get Certificate
          </button>
        </div>
      </Transition>
    </div>
  );
};

export default CertificationPage;
