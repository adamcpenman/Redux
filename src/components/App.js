import React from "react";
import DarkMode from "./DarkMode";
import Title from "./Title";

function App(props) {
  return (
    <div className={`app ${props.darkMode ? "dark" : ""}`}>
      <DarkMode />
      <Title />
    </div>
  );
}

export default App;
