import React from "react";
import "./App.scss";
import Main from "./containers/Main";
import ColoredCursor from "./components/coloredCursor/ColoredCursor";

function App() {
  return (
    <div>
      <ColoredCursor />
      <Main />
    </div>
  );
}

export default App;
