// import React from "react";

// const Dashboard = () => {
//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-64 bg-blue-900 text-white p-6">
//         <h2 className="text-xl font-semibold mb-8">Admin Panel</h2>
//         <ul>
//           <li className="mb-4">
//             <a href="#" className="text-gray-300 hover:text-white">
//               Dashboard
//             </a>
//           </li>
//           <li className="mb-4">
//             <a href="Tournamentpage" className="text-gray-300 hover:text-white">
//               Tournaments
//             </a>
//           </li>
//           <li className="mb-4">
//             <a href="#" className="text-gray-300 hover:text-white">
//               Reservations
//             </a>
//           </li>
//           <li className="mb-4">
//             <a href="#" className="text-gray-300 hover:text-white">
//               Users
//             </a>
//           </li>
//         </ul>
//       </div>

//       {/* Main content */}
//       <div className="flex-1 p-8">
//         {/* Top Bar */}
//         <div className="flex justify-between items-center mb-8">
//           <h1 className="text-3xl font-semibold">Dashboard</h1>
//           <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
//             Logout
//           </button>
//         </div>

//         {/* Dashboard Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h3 className="text-xl font-semibold">Active Tournaments</h3>
//             <p className="text-gray-500">10</p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h3 className="text-xl font-semibold">Reservations</h3>
//             <p className="text-gray-500">24</p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h3 className="text-xl font-semibold">Active Users</h3>
//             <p className="text-gray-500">150</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


// import React from "react";
// import { Link } from "react-router-dom"; // Only import Link for routing


// const Dashboard = () => {
//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-64 bg-blue-900 text-white p-6">
//         <h2 className="text-xl font-semibold mb-8">Admin Panel</h2>
//         <ul>
//           <li className="mb-4">
//             <Link to="/" className="text-gray-300 hover:text-white">
//               Dashboard
//             </Link>
//           </li>
//           <li className="mb-4">
//             <Link to="/TournamentPage" className="text-gray-300 hover:text-white">
//               Tournaments
//             </Link>
//           </li>
//           <li className="mb-4">
//             <Link to="#" className="text-gray-300 hover:text-white">
//               Reservations
//             </Link>
//           </li>
//           <li className="mb-4">
//             <Link to="#" className="text-gray-300 hover:text-white">
//               Users
//             </Link>
//           </li>
//         </ul>
//       </div>

//       {/* Main content */}
//       <div className="flex-1 p-8">
//         {/* Top Bar */}
//         <div className="flex justify-between items-center mb-8">
//           <h1 className="text-3xl font-semibold">Dashboard</h1>
//           <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
//             Logout
//           </button>
//         </div>

//         {/* Dashboard Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h3 className="text-xl font-semibold">Active Tournaments</h3>
//             <p className="text-gray-500">10</p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h3 className="text-xl font-semibold">Reservations</h3>
//             <p className="text-gray-500">24</p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h3 className="text-xl font-semibold">Active Users</h3>
//             <p className="text-gray-500">150</p>
//           </div>
//         </div>

        

//       </div>
//     </div>

    
//   );
// };

// export default Dashboard;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import TournamentPage from "../component/tournament/TournamentPage"; // Import TournamentPage
import BookingPage from "../component/Booking/BookingPage"; // Import BookingPage
import LocationDetails from "../pages/LocationDetails"; // Import LocationDetails

const Dashboard = () => {
  const [content, setContent] = useState(null); // State to manage dynamic content

  // Handlers to dynamically set the content
  const handleDashboardClick = () => {
    setContent(
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Active Tournaments</h3>
          <p className="text-gray-500">10</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Reservations</h3>
          <p className="text-gray-500">24</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Active Users</h3>
          <p className="text-gray-500">150</p>
        </div>
      </div>
    );
  };

  const handleTournamentsClick = () => {
    setContent(<TournamentPage />);
  };

  const handleBookingsClick = () => {
    setContent(<BookingPage />);
  };

  const handleLocationDetailsClick = () => {
    setContent(<LocationDetails />);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-blue-900 text-white p-6 min-h-screen">
        <h2 className="text-xl font-semibold mb-8">Admin Panel</h2>
        <ul>
          <li className="mb-4">
            <button
              onClick={handleDashboardClick}
              className="text-gray-300 hover:text-white w-full text-left"
            >
              Dashboard
            </button>
          </li>
          <li className="mb-4">
            <button
              onClick={handleTournamentsClick}
              className="text-gray-300 hover:text-white w-full text-left"
            >
              Tournaments
            </button>
          </li>
          <li className="mb-4">
            <button
              onClick={handleLocationDetailsClick} // Added this handler
              className="text-gray-300 hover:text-white w-full text-left"
            >
              Location Details
            </button>
          </li>
          <li className="mb-4">
            <button
              onClick={handleBookingsClick}
              className="text-gray-300 hover:text-white w-full text-left"
            >
              Bookings
            </button>
          </li>
          <li className="mb-4">
            <Link to="#" className="text-gray-300 hover:text-white">
              Reservations
            </Link>
          </li>
          <li className="mb-4">
            <Link to="#" className="text-gray-300 hover:text-white">
              Users
            </Link>
          </li>
        </ul>
      </div>

      {/* Main content */}
      <div className="flex-1 p-6 min-h-screen">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold">Dashboard</h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Logout
          </button>
        </div>

        {/* Display Dynamic Content */}
        <div>{content}</div>
      </div>
    </div>
  );
};

export default Dashboard;

