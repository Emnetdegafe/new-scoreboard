import React, { useState, useEffect } from "react";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";

function compare_score(playerA, playerB) {
  return playerB.score - playerA.score;
}
export default function Scoreboard() {
  const [players, set_players] = useState([
    { id: 1, name: "Violeta", score: 11 },
    { id: 2, name: "Eszter", score: 14 },
    { id: 3, name: "Jeroen v2", score: 4 },
    { id: 4, name: "Lisa", score: 42 },
  ]);
  const [sort_by, set_sort_by] = useState("score");

  const names = [
    players[0].name,
    players[1].name,
    players[2].name,
    players[3].name,
  ];

  function compare_name(playerA, playerB) {
    return playerA.name.localeCompare(playerB.name);
  }

  console.log("what is the name", compare_name);

  const change_sorting = (event) => {
    set_sort_by(event.target.value);
  };
  console.log(sort_by);
  const players_sorted = [...players].sort(sort_by === 'name' ? compare_name:compare_score);

  return (
    <div className="Scoreboard">
      <h4>Player's scores:</h4>
      <p>
        {" "}
        Sort order: {""}
        <select onChange={change_sorting}>
          <option value="score">Sort by score</option>
          <option value="name">Sort by name</option>
        </select>
      </p>
      <ul>
        {players_sorted.map((player) => {
          return (
            <Player id={player.id} name={player.name} score={player.score} />
          );
        })}
      </ul>
      <AddPlayerForm />
    </div>
  );
}
