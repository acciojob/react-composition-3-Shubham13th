import React, { useState } from "react";

const Tooltip = ({ text, children }) => {
  const [show, setShow] = useState(false);

  return React.cloneElement(children, {
    className: "tooltip",
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    children: show ? (
      <div className="tooltiptext">{text}</div>
    ) : (
      children.props.children
    )
  });
};

export default Tooltip;
