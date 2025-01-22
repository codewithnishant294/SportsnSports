// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLogin from './AdminLogin'; // Import the AdminLogin component
import Dashboard from './pages/Dashboard';
import TournamentPage from './component/tournament/TournamentPage';
import BookingPage from './component/Booking/BookingPage';
import LocationDetails from './pages/LocationDetails';
import PropertiesPage from './component/PropertiesPage';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Welcome to the Admin Panel</h1>
        {/* Define the routes for different components */}
        <Routes>
          <Route path="/" element={<AdminLogin />} /> {/* Admin Login Route */}
          <Route path="/Dashboard" element={<Dashboard/>} /> {/* Dashboard Route */}
          <Route path="/TournamentPage" element={<TournamentPage/>} /> {/* Dashboard Route */}
          <Route path="/BookingPage" element={<BookingPage />} />
          <Route path="/LocationDetails" element={<LocationDetails />} />
          <Route path="/PropertiesPage" element={<PropertiesPage />}  />



        </Routes>
      </div>
      

    </Router>
  );
}

export default App;
