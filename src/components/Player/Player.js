import React from "react";



export default function Player(props) {
  
  const onClickIncrease = () => {
     props.incrementScore(props.id)
  
  }

  // console.log('props', props)
  return (
    <li className="Player">
      <div className = "percentage_coloring"
      style={{ width: props.score + "%"}}
      />
      <p>
        {/* Id: {props.id}<br/> */}
        {props.name} (Score: {props.score})
        <button onClick = {onClickIncrease}>Increment</button>
      </p>
    </li>
  );
}
