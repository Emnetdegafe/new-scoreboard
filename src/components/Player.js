import React from "react";


export default function Player(props) {
  
  const onClickIncrease = () => {
     props.incrementScore(props.id)
  
  }

  // console.log('props', props)
  return (
    <div className="player">
      <p className="card">
        Id: {props.id}<br/>
        Name : {props.name} (Score: {props.score})
      </p>
      <button onClick = {onClickIncrease}>Increment</button>
    </div>
  );
}
