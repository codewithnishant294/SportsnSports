import React from "react";

const BookingCard = ({ booking }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-2">{booking.name}</h3>
      <p className="text-gray-500 mb-2">Email: {booking.email}</p>
      <p className="text-gray-500 mb-2">Time Slot: {new Date(booking.timeSlot).toLocaleString()}</p>
      <p className="text-gray-500">Sport: {booking.sport}</p>
      <div className="mt-4 flex justify-between">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Edit
        </button>
        <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
          Deleten 
        </button>
      </div>
    </div>
  );
};

export default BookingCard;
