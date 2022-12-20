import React from "react";
//var React = require("react");
import ReactDOM from "react-dom";
//var ReactDOM = require("react-dom");

//ReactDOM.render(<h1>Heading 1</h1>,document.getElementById("root"));
// ** Both the above and below statements are same **
// var h1 = document.createElement("h1");
// h1.innerHTML = "Heading 1";
// document.getElementById("root").appendChild(h1);

const fname = "Suraj";
const lname = "Kumar";
const num = 7;

ReactDOM.render(
  <div>
    <h2>Hello {fname + " " + lname}!</h2>
    <p>
      Your lucky number is {num} or {7 + Math.floor(Math.random() * 10)}.
    </p>
    <h1>My Cart items</h1>
    <ul>
      <li>Sandal, Formal & Sports Shoe</li>
      <li>Watch</li>
      <li>Smartphone</li>
    </ul>
  </div>,
  document.getElementById("root")
);
