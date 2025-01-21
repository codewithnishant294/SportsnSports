import React from "react";
import TournamentCard from "./TournamentCard";

const TournamentList = () => {
  const tournaments = [
    { id: 1, name: "Summer Championship", date: "2025-05-10", location: "Stadium A" },
    { id: 2, name: "Winter Open", date: "2025-12-01", location: "Arena B" },
    // Add more tournaments as needed
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tournaments.map((tournament) => (
        <TournamentCard key={tournament.id} tournament={tournament} />
      ))}
    </div>
  );
};

export default TournamentList;
