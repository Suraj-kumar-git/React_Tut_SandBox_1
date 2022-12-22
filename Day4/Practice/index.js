import React from "react";
import ReactDOM from "react-dom";
// import * as result from "./math";
import {add,subtract,multiply,divide} from "./math";
ReactDOM.render(
<div>
  <ul>
    <li>{add(10,2)}</li>
    <li>{subtract(10,2)}</li>
    <li>{multiply(10,2)}</li>
    <li>{divide(10,2)}</li>
  </ul>
</div>,
document.getElementById("root"));
