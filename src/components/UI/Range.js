import { useState } from "react";

const Range = (props) => {
  return (
    <>
      <label className="form-label">{props.label}</label>
      <input
        type="range"
        min={props.min}
        max={props.max}
        step={props.step}
        value={props.rangevalue}
        className="form-range"
        onChange={(e) => props.handleRange(e.target.value)}
      />
      <p className="text-primary" id="range-output">
        {props.rangevalue}
      </p>
    </>
  );
};

export default Range;
