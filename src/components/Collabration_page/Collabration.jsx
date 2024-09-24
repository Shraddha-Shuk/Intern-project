import React, { useState } from "react";

const CollaborationPage = () => {
  const [isPartnerDetailsMode, setIsPartnerDetailsMode] = useState(false); // Controls switching between cards
  const [partnerData, setPartnerData] = useState({
    name: "",
    institute: "",
  });

  const [downloadInfo, setDownloadInfo] = useState({
    name: "",
    contactNumber: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (isPartnerDetailsMode) {
      setPartnerData({ ...partnerData, [name]: value });
    } else {
      setDownloadInfo({ ...downloadInfo, [name]: value });
    }
  };

  const handleViewPartnerDetails = () => {
    // Dummy partner details logic
    if (partnerData.name && partnerData.institute) {
      alert("Partner Details Displayed");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-5">
      {/* Page Header */}
      <h1 className="text-4xl font-bold mb-8 text-transparent bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-center">
        Our Collaboration Page
      </h1>

      {/* Card Container */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full space-y-8 md:space-y-0 md:space-x-10">
        {/* Educational Partners Section */}
        {!isPartnerDetailsMode && (
          <div className="bg-white p-6 rounded-lg shadow-md w-[90%] md:w-[45%] max-w-lg">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Educational Partners</h2>
            <p className="text-gray-600 text-base mb-4">
              Enter your name and contact information to view the details of our educational partners.
            </p>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={downloadInfo.name}
              onChange={handleInputChange}
              className="w-full p-3 text-lg border-2 border-gray-300 rounded-lg focus:border-blue-400 focus:outline-none mb-4"
            />
            <input
              type="text"
              name="contactNumber"
              placeholder="Contact Number"
              value={downloadInfo.contactNumber}
              onChange={handleInputChange}
              className="w-full p-3 text-lg border-2 border-gray-300 rounded-lg focus:border-blue-400 focus:outline-none mb-4"
            />
            <button className="w-full p-3 bg-blue-500 text-white text-lg font-bold rounded-lg hover:bg-blue-600 transition duration-300">
              View Partners
            </button>
          </div>
        )}

        {/* Partner Details Section */}
        {isPartnerDetailsMode && (
          <div className="bg-white p-6 rounded-lg shadow-md w-[90%] md:w-[45%] max-w-lg">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Partner Details</h2>
            <p className="text-gray-600 text-base mb-4">
              Enter the name of the partner and their institute to view more details.
            </p>
            <input
              type="text"
              name="name"
              placeholder="Partner Name"
              value={partnerData.name}
              onChange={handleInputChange}
              className="w-full p-3 text-lg border-2 border-gray-300 rounded-lg focus:border-blue-400 focus:outline-none mb-4"
            />
            <input
              type="text"
              name="institute"
              placeholder="Institute"
              value={partnerData.institute}
              onChange={handleInputChange}
              className="w-full p-3 text-lg border-2 border-gray-300 rounded-lg focus:border-blue-400 focus:outline-none mb-4"
            />
            <button
              onClick={handleViewPartnerDetails}
              className="w-full p-3 bg-blue-500 text-white text-lg font-bold rounded-lg hover:bg-blue-600 transition duration-300"
            >
              View Partner Details
            </button>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center mt-8 space-x-4">
        <button
          onClick={() => setIsPartnerDetailsMode(false)}
          className={`px-5 py-3 text-lg rounded-lg transition duration-300 ${
            !isPartnerDetailsMode ? "bg-blue-500 text-white" : "bg-gray-300 hover:bg-gray-400"
          }`}
        >
          View Partners
        </button>
        <button
          onClick={() => setIsPartnerDetailsMode(true)}
          className={`px-5 py-3 text-lg rounded-lg transition duration-300 ${
            isPartnerDetailsMode ? "bg-blue-500 text-white" : "bg-gray-300 hover:bg-gray-400"
          }`}
        >
          Partner Details
        </button>
      </div>
    </div>
  );
};

export default CollaborationPage;