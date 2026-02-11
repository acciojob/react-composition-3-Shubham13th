import React, { useState } from "react";

const Tooltip = ({ text, children }) => {
  const [show, setShow] = useState(false);

  // Detect tag name (h2, p, etc.)
  const Tag = children.type;

  return (
    <Tag
      className="tooltip"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children.props.children}
      {show && <div className="tooltiptext">{text}</div>}
    </Tag>
  );
};

export default Tooltip;
