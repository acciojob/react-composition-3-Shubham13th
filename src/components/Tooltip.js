import React from "react";
import "./Tooltip.css";

const Tooltip = (props) => {
  return (
    <div>
      <div className="tooltip-container">
        <p>Hover Over me</p>
        <span className="tooltip">{props.first}</span>
      </div>

      <br />

      <div className="tooltip-container">
        <p>Hover over me to see another tooltip</p>
        <span className="tooltip">{props.second}</span>
      </div>
    </div>
  );
};

export default Tooltip;
