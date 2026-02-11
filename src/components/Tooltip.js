import React from "react";
import "./Tooltip.css";

const Tooltip = (props) => {
    return (
        <div>
            <h2 className="tooltip">
                Hover Over me
                <div>{props.first}</div>
            </h2>

            <p className="tooltip">
                Hover over me to see another tooltip
                <div>{props.second}</div>
            </p>

        </div>
    );
};

export default Tooltip;
