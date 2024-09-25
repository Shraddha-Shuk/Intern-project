import React from "react";

const CollaborationPage = () => {
  const educationalPartners = [
    {
      name: "IBM",
      description:
        "IBM provides cloud-based services, AI, and enterprise-grade computing solutions for educational institutions.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    },
    {
      name: "Cisco",
      description:
        "Cisco offers cutting-edge networking solutions and cybersecurity tools, empowering education through technology.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Cisco_logo_blue_2016.svg",
    },
    {
      name: "Google",
      description:
        "Google leads the way in online education with Google Classroom and innovative AI-based learning tools.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    },
    {
      name: "Microsoft",
      description:
        "Microsoft supports education with tools like Azure, Microsoft Teams, and Office 365 for students and teachers.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    },
    {
      name: "Amazon",
      description:
        "Amazon provides cloud-based services and AI tools through AWS, revolutionizing how education is delivered.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      {/* Page Header */}
      <h1 className="text-5xl font-bold text-center mb-12 text-transparent bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text">
        Our Educational Partners
      </h1>

      {/* Scrollable Card Container */}
      <div className="flex space-x-8 overflow-x-scroll scrollbar-hide p-4">
        {educationalPartners.map((partner, index) => (
          <div
            key={index}
            className="flex-none w-72 bg-white shadow-lg rounded-lg transform hover:scale-105 transition duration-300 hover:shadow-xl"
          >
            {/* Partner Logo */}
            <img
              src={partner.logo}
              alt={partner.name}
              className="h-16 mx-auto mt-6"
            />
            {/* Partner Name */}
            <div className="text-center p-4">
              <h2 className="text-2xl font-bold text-indigo-700 mb-2">
                {partner.name}
              </h2>
              {/* Partner Description */}
              <p className="text-gray-600 mb-4">{partner.description}</p>
              {/* Learn More Button */}
              <button className="px-4 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollaborationPage;
