import React, { useState } from "react";

const PropertiesPage = () => {
  const [properties, setProperties] = useState([
    { id: 1, name: "Basketball Court", location: "Downtown", capacity: 50 },
    { id: 2, name: "Soccer Field", location: "Westside", capacity: 100 },
    { id: 3, name: "Tennis Court", location: "East Park", capacity: 20 },
  ]);

  const [newProperty, setNewProperty] = useState({
    name: "",
    location: "",
    capacity: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProperty({ ...newProperty, [name]: value });
  };

  const handleAddProperty = () => {
    if (newProperty.name && newProperty.location && newProperty.capacity) {
      setProperties([
        ...properties,
        {
          id: properties.length + 1,
          ...newProperty,
        },
      ]);
      setNewProperty({ name: "", location: "", capacity: "" });
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Properties Management</h1>

      {/* Add New Property Form */}
      <div className="bg-white p-4 shadow rounded mb-6">
        <h2 className="text-lg font-semibold mb-4">Add New Property</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            name="name"
            value={newProperty.name}
            onChange={handleInputChange}
            placeholder="Property Name"
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="location"
            value={newProperty.location}
            onChange={handleInputChange}
            placeholder="Location"
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="number"
            name="capacity"
            value={newProperty.capacity}
            onChange={handleInputChange}
            placeholder="Capacity"
            className="p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          onClick={handleAddProperty}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700"
        >
          Add Property
        </button>
      </div>

      {/* Properties List as Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div
            key={property.id}
            className="bg-white p-4 shadow rounded flex flex-col justify-between"
          >
            <h3 className="text-xl font-bold mb-2">{property.name}</h3>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Location:</span> {property.location}
            </p>
            <p className="text-gray-600 mb-4">
              <span className="font-semibold">Capacity:</span> {property.capacity}
            </p>
            <button
              className="px-3 py-2 bg-red-500 text-white rounded shadow hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertiesPage;
