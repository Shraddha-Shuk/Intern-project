import React, { useState } from "react";

const CertificationPage = () => {
  const [isVerifyMode, setIsVerifyMode] = useState(false); // Controls switching between cards
  const [verificationData, setVerificationData] = useState({
    name: "",
    certificateNumber: "",
  });

  const [downloadData, setDownloadData] = useState({
    name: "",
    contactNumber: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (isVerifyMode) {
      setVerificationData({ ...verificationData, [name]: value });
    } else {
      setDownloadData({ ...downloadData, [name]: value });
    }
  };

  const handleVerify = () => {
    // Dummy verification logic
    if (verificationData.name && verificationData.certificateNumber) {
      alert("Certificate Verified");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-5">
      {/* Page Header */}
      <h1 className="text-4xl font-bold mb-8 text-transparent bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-center">
        Certification Portal
      </h1>

      {/* Card Container */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full space-y-8 md:space-y-0 md:space-x-10">
        {/* Certificate Download Section */}
        {!isVerifyMode && (
          <div className="bg-white p-6 rounded-lg shadow-md w-[90%] md:w-[45%] max-w-lg">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Download Certificate</h2>
            <p className="text-gray-600 text-base mb-4">
              Enter your name and registration or contact number to download your course certificate.
            </p>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={downloadData.name}
              onChange={handleInputChange}
              className="w-full p-3 text-lg border-2 border-gray-300 rounded-lg focus:border-blue-400 focus:outline-none mb-4"
            />
            <input
              type="text"
              name="contactNumber"
              placeholder="Registration/Contact Number"
              value={downloadData.contactNumber}
              onChange={handleInputChange}
              className="w-full p-3 text-lg border-2 border-gray-300 rounded-lg focus:border-blue-400 focus:outline-none mb-4"
            />
            <button className="w-full p-3 bg-blue-500 text-white text-lg font-bold rounded-lg hover:bg-blue-600 transition duration-300">
              Download Certificate
            </button>
          </div>
        )}

        {/* Certificate Verification Section */}
        {isVerifyMode && (
          <div className="bg-white p-6 rounded-lg shadow-md w-[90%] md:w-[45%] max-w-lg">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Verify Certificate</h2>
            <p className="text-gray-600 text-base mb-4">
              Enter your name and certificate number to verify your course certificate.
            </p>
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
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center mt-8 space-x-4">
        <button
          onClick={() => setIsVerifyMode(false)}
          className={`px-5 py-3 text-lg rounded-lg transition duration-300 ${
            !isVerifyMode ? "bg-blue-500 text-white" : "bg-gray-300 hover:bg-gray-400"
          }`}
        >
          Download Certificate
        </button>
        <button
          onClick={() => setIsVerifyMode(true)}
          className={`px-5 py-3 text-lg rounded-lg transition duration-300 ${
            isVerifyMode ? "bg-blue-500 text-white" : "bg-gray-300 hover:bg-gray-400"
          }`}
        >
          Verify Certificate
        </button>
      </div>
    </div>
  );
};

export default CertificationPage;
