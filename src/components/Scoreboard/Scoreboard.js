import React, { useState } from "react";
import Player from "../Player/Player";
import AddPlayerForm from "../AddPlayerForm";

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

  function compare_name(playerA, playerB) {
    return playerA.name.localeCompare(playerB.name);
  }

  // console.log("what is the name", compare_name);

  const change_sorting = (event) => {
    set_sort_by(event.target.value);
  };
  // console.log(sort_by);
  const players_sorted = [...players].sort(
    sort_by === "name" ? compare_name : compare_score
  );

  const incrementScore = (id) => {
    // console.log("where is the id", id);
    const new_player_array = players.map((player) => {
      if (player.id === id) {
        return { ...player, score: player.score + 1 };
      }
      return player;
    });
    set_players(new_player_array);
  };
  const restScore = () => {
    const updatedPlayers = players.map((player) => {
      return { ...player, score: (player.score = 0) };
    });
    set_players(updatedPlayers);
    console.log("updated player", updatedPlayers);
  };
  const scoreRandum = () => {
    const randomPlayerScore = players.map((player) => {
      return { ...player, score: Math.round(Math.random()) };
    });
    set_players(randomPlayerScore);
  };
  const addPlayer = newPlayerName => {
    console.log('what is the name?', newPlayerName)
    const newPlayer = {
      id: players.length + 1,
      name:newPlayerName,
      score:0,

    };
    set_players([...players, newPlayer])
  }
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
        <br />
        <br />
        <button onClick={scoreRandum}>Random scores</button>
        <button onClick={restScore}>reset score</button>
      </p>
      <ul>
        {players_sorted.map((player) => {
          return (
            <Player
              id={player.id}
              name={player.name}
              score={player.score}
              incrementScore={incrementScore}
            />
          );
        })}
      </ul>
      <AddPlayerForm addPlayer={addPlayer}/>
    </div>
  );
}
