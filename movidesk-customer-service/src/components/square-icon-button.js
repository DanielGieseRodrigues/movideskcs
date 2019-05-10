import React from "react";
import "./square-icon-button.css";

function SquareIconButton(props) {
  return (
    <button
      className={`md-btn md-btn-square md-btn-${props.classType}`}
      onClick={() => {
        props.fnClick(true);
      }}
    >
      <i className={`icon-mv-${props.icon}`} />
    </button>
  );
}

export default SquareIconButton;
