import React from "react";

var isDone = false;

function strike() {
  document.getElementById("root").style.textDecoration = "line-through";
}
function unStrike() {
  document.getElementById("root").style.textDecoration = null;
}
// The code in Comments represent Declarative Programming

// const strikeThrough = {textDecoration : "line-through"};

function App() {
  // return <p style={isDone ? strikeThrough : null}>Buy Milk</p>
  return (
    <div>
      <p style={isDone ? { textDecoration: "line-through" } : null}>Buy milk</p>
      <button onClick={strike}>Change to strike through</button>
      <button onClick={unStrike}>Change back</button>
    </div>
  );
}
export default App;
