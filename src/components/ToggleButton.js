import React from "react";

function ToggleButton(props) {
  return (
    <button
      className="btn"
      pressed={props.isPressed}
      onClick={() => props.setFilter(props.name)}
    >
      {props.name}
    </button>
  );
}

export default ToggleButton;
