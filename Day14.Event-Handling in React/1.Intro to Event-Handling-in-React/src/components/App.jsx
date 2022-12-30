import React, { useState } from "react";

function App() {
  const [header, setheaderText] = useState("Hello");
  const [isMousedOver, setMousedOver] = useState(false);
  function headerText() {
    setheaderText("Submitted");
  }
  function mousedOver() {
    setMousedOver(true);
  }
  function mouseOut() {
    setMousedOver(false);
  }
  return (
    <div className="container">
      <h1>{header}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onClick={headerText}
        onMouseOver={mousedOver}
        onMouseOut={mouseOut}
        style={{ backgroundColor: isMousedOver ? "black" : "white" }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
