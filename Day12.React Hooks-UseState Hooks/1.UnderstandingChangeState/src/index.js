import React from "react";
import ReactDOM from "react-dom";

var count = 0;
function increase() {
  count++;
  // This increment doesn't render the value of count to the ReactDOM.render()
  // and so the value of count is still 0 .
  // To increase the value of count to be updated on the screen
  // We need to render the count again.
  ReactDOM.render(
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
    </div>,
    document.getElementById("root")
  );
  // console.log(count);
}
ReactDOM.render(
  <div className="container">
    <h1>{count}</h1>
    <button onClick={increase}>+</button>
  </div>,
  document.getElementById("root")
);
