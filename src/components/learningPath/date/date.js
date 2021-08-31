import React from "react";
import "./date.css";

const Datestr = (props) => {
  return (
    <div style={props.style} className="date-container" onClick={props.onclick}>
      <div className="date">
        {props.type === "right" && (
          <div className="triangle right"/>
        )}

        <p className="date-tag unselectable">{props.date}</p>
        {props.type == "left" && (
            <div className="triangle left"/>
        )}
      </div>
    </div>
  );
};

export default Datestr;
