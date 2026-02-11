import React from "react";
import Tooltip from "./Tooltip";
import "./App.css";

function App() {
  return (
    <div style={{ padding: "50px" }}>
      <Tooltip text="This is a tooltip for text">
        <p>Hover over this text</p>
      </Tooltip>

      <br /><br />

      <Tooltip text="Tooltip on a button">
        <button>Hover me</button>
      </Tooltip>

      <br /><br />

      <Tooltip text="Another tooltip example">
        <span>Hover over this span</span>
      </Tooltip>
    </div>
  );
}

export default App;
