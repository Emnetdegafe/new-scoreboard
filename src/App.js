import React from "react";
import "./style/global.scss";
import Title from './components/Title'
import Scoreboard from "./components/Scoreboard";

function App() {
  return (
    <div className="App">
      <Title/>
      <main className = "container">
        <Scoreboard />
      </main>
    </div>
  );
}

export default App;
