import React from "react";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm"

export default function Scoreboard() {
  return (
    <div className="Scoreboard">
      <h4>Player's scores:</h4>
      <ul>
        <Player name="Violeta" />
        <Player name="Eszter" />
        <Player name="Jeroen v2" />
        <Player name="Lisa" />
      </ul>
      <AddPlayerForm/>
    </div>
  );
}
