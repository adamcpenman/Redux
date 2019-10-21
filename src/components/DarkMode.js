import React from "react";

function DarkMode(props) {
  return (
    <label>
      <input type="checkbox" value={props.enabled} onChange={props.toggle} />
      <span>Lights Out</span>
    </label>
  );
}

export default DarkMode;
