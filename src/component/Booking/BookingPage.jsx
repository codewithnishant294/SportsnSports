import React from "react";
import AddBooking from "./AddBooking";
import BookingList from "./BookingList";
import TimeSlotManager from "./TimeSlotManager";

const BookingPage = () => {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-semibold mb-6">Manage Bookings</h1>

      <AddBooking />

      <BookingList />

      <TimeSlotManager />
    </div>
  );
};

export default BookingPage;
