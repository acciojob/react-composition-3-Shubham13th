import React, { useState } from "react";

const Tooltip = ({ text, children }) => {
  const [show, setShow] = useState(false);

  // Detect the tag name of the child (h2, p, etc.)
  const ChildTag = children.type === "h2" ? "h2" : "div";

  return (
    <span
      className="tooltip"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}

      {show && <ChildTag className="tooltiptext">{text}</ChildTag>}
    </span>
  );
};

export default Tooltip;
