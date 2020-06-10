import React, { useState } from "react";

export default function AddPlayer(props) {
  // console.log('the props', props)
  const [name, set_name] = useState();

  const ClicktOAdd = () =>{
  props.addPlayer(name)
}
  return (
    <div className="AddPlayerForm">
      <p>
        {" "}
        New Player:{" "}
        <input
          onChange={(event) => {
            set_name(event.target.value)
          }}
          type="text"
          placeholder="Name"
          value={name}
        />
        <button onClick = {ClicktOAdd}>add player</button>
      </p>
    </div>
  );
}
