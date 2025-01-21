import React from "react";
import AddTournament from "./AddTournament";
import TournamentList from "./TournamentList";

const TournamentPage = () => {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-semibold mb-6">Tournaments</h1>

      <AddTournament />

      <TournamentList />
    </div>
  );
};

export default TournamentPage;
