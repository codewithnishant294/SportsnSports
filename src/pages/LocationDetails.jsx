import React, { useState } from "react";

const LocationDetails = () => {
  // State variables to hold form input values
  const [address, setAddress] = useState("");
  const [sportsOffered, setSportsOffered] = useState("");
  const [courtTimings, setCourtTimings] = useState("");
  const [pricePerHour, setPricePerHour] = useState("");

  // Form submission handler
  const handleConfirm = () => {
    console.log("Form Data:", { address, sportsOffered, courtTimings, pricePerHour });
    alert("Details saved successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header Section */}
      <div className="bg-white shadow-lg p-6 rounded-lg mb-8">
        <h1 className="text-3xl font-bold text-teal-700 mb-6">Infinity Arena</h1>
        <div className="flex gap-4">
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition duration-300">
            Edit Location
          </button>
          <button className="px-4 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-100 transition duration-300">
            Delete
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition duration-300">
            Archive
          </button>
        </div>
      </div>

      {/* Details Section */}
      <div className="bg-white shadow-lg p-8 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Address */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Address:</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-teal-500 focus:outline-none"
              placeholder="Enter address"
            />
          </div>

          {/* Sports Offered */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Sports Offered:</label>
            <input
              type="text"
              value={sportsOffered}
              onChange={(e) => setSportsOffered(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-teal-500 focus:outline-none"
              placeholder="Enter sports offered"
            />
          </div>

          {/* Court Timings */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Court Timings:</label>
            <input
              type="text"
              value={courtTimings}
              onChange={(e) => setCourtTimings(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-teal-500 focus:outline-none"
              placeholder="Enter court timings"
            />
          </div>

          {/* Price per hour */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Price per hour:</label>
            <input
              type="text"
              value={pricePerHour}
              onChange={(e) => setPricePerHour(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-teal-500 focus:outline-none"
              placeholder="Enter price per hour"
            />
          </div>
        </div>

        {/* Confirm Button */}
        <div className="flex justify-center">
          <button
            onClick={handleConfirm}
            className="bg-teal-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-teal-700 transition duration-300"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationDetails;
