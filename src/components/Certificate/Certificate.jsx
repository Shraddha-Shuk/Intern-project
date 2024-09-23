import React, { useState } from "react";

const CertificationPage = () => {
  const [activePage, setActivePage] = useState("verify"); // To toggle between verify and download pages
  const [isVerified, setIsVerified] = useState(false); // State for verification success
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
    if (activePage === "verify") {
      setVerificationData({ ...verificationData, [name]: value });
    } else {
      setDownloadData({ ...downloadData, [name]: value });
    }
  };

  const handleVerify = () => {
    // Dummy verification logic
    if (verificationData.name && verificationData.certificateNumber) {
      setIsVerified(true); // Show success message on verification
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-5">
      {/* Page Header */}
      <h1 className="text-4xl font-bold mb-8 text-transparent bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-center">
        Certification Portal
      </h1>

      {/* Conditional Rendering for Active Page */}
      {activePage === "verify" ? (
        // Verify Certificate Page
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg h-full flex flex-col justify-between">
          <div>
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
            {/* Verified Certificate Display */}
            {isVerified && (
              <div className="mt-4 p-4 bg-green-100 rounded-lg border-l-4 border-green-600">
                <h4 className="font-bold text-green-700 text-lg mb-2">✅ Certificate Verified</h4>
                <p><strong>Name:</strong> {verificationData.name}</p>
                <p><strong>Certificate Number:</strong> {verificationData.certificateNumber}</p>
                <p><strong>Course:</strong> Full-Stack Development</p>
                <p><strong>Date:</strong> 20th September 2024</p>
              </div>
            )}
          </div>
          {/* Button to Navigate to Download Page */}
          <div className="mt-6 text-center">
            <button
              className="px-5 py-3 bg-gray-300 text-lg rounded-lg hover:bg-gray-400 transition duration-300"
              onClick={() => setActivePage("download")}
            >
              Go to Download
            </button>
          </div>
        </div>
      ) : (
        // Download Certificate Page
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg h-full flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Download Certificate</h2>
            <p className="text-gray-600 text-base mb-4">
              Enter your name and contact number to download your course certificate.
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
              placeholder="Contact Number"
              value={downloadData.contactNumber}
              onChange={handleInputChange}
              className="w-full p-3 text-lg border-2 border-gray-300 rounded-lg focus:border-blue-400 focus:outline-none mb-4"
            />
            <button className="w-full p-3 bg-blue-500 text-white text-lg font-bold rounded-lg hover:bg-blue-600 transition duration-300">
              Download Certificate
            </button>
          </div>
          {/* Button to Navigate Back to Verification Page */}
          <div className="mt-6 text-center">
            <button
              className="px-5 py-3 bg-gray-300 text-lg rounded-lg hover:bg-gray-400 transition duration-300"
              onClick={() => setActivePage("verify")}
            >
              Back to Verify
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificationPage;
