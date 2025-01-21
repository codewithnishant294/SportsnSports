import React from "react";
import BookingCard from "./BookingCard";

const BookingList = () => {
  const bookings = [
    { id: 1, name: "John Doe", email: "john@example.com", timeSlot: "2025-01-25T10:00", sport: "Basketball" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", timeSlot: "2025-01-25T12:00", sport: "Football" },
    // Add more bookings here
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {bookings.map((booking) => (
        <BookingCard key={booking.id} booking={booking} />
      ))}
    </div>
  );
};

export default BookingList;
