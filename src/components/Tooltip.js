import React, { useState } from "react";

const Tooltip = ({ text, children }) => {
  const [show, setShow] = useState(false);

  const childrenArray = show
    ? [children.props.children, <div key="tooltip" className="tooltiptext">{text}</div>]
    : children.props.children;

  return React.cloneElement(children, {
    className: `${children.props.className || ""} tooltip`,
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    children: childrenArray,
  });
};

export default Tooltip;
