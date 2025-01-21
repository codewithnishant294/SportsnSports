import React, { useState } from "react";

const TimeSlotManager = () => {
  const [availableSlots, setAvailableSlots] = useState([
    { id: 1, time: "2025-01-25T10:00", available: true },
    { id: 2, time: "2025-01-25T12:00", available: true },
    // Add more slots as needed
  ]);

  const toggleAvailability = (id) => {
    setAvailableSlots((prevSlots) =>
      prevSlots.map((slot) =>
        slot.id === id ? { ...slot, available: !slot.available } : slot
      )
    );
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Manage Time Slots</h2>
      <ul className="space-y-4">
        {availableSlots.map((slot) => (
          <li key={slot.id} className="flex justify-between items-center">
            <span className="text-gray-700">
              {new Date(slot.time).toLocaleString()}
            </span>
            <button
              onClick={() => toggleAvailability(slot.id)}
              className={`px-4 py-2 rounded-md ${
                slot.available ? "bg-green-600" : "bg-gray-600"
              } text-white`}
            >
              {slot.available ? "Available" : "Unavailable"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimeSlotManager;
