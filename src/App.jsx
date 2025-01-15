// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLogin from './AdminLogin'; // Import the AdminLogin component

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Welcome to the Admin Panel</h1>
        {/* Define the routes for different components */}
        <Routes>
          <Route path="/" element={<AdminLogin />} /> {/* Admin Login Route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
