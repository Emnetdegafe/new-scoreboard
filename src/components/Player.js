import React from "react";

export default function Player(props) {
  return (
    <div className="player">
      <p className="card">
        Id: {props.id}<br/>
        Name : {props.name}<br/>
        Score: {props.score}
      </p>
    </div>
  );
}
