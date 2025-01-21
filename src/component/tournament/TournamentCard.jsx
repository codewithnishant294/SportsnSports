import React from "react";

const TournamentCard = ({ tournament }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-2">{tournament.name}</h3>
      <p className="text-gray-500 mb-2">Date: {tournament.date}</p>
      <p className="text-gray-500">Location: {tournament.location}</p>
      <div className="mt-4 flex justify-between">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Edit
        </button>
        <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TournamentCard;
