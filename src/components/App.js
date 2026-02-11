import React from "react";
import Tooltip from "./Tooltip";

function App() {
  return (
    <div>
      <Tooltip text="Heading Tooltip">
        <h2>Heading Text</h2>
      </Tooltip>

      <Tooltip text="Paragraph Tooltip">
        <p>Paragraph Text</p>
      </Tooltip>
    </div>
  );
}

export default App;
  