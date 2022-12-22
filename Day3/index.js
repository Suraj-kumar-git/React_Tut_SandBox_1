import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import Heading from "./Heading";
// import List from "./List";

// function Heading() {
//   return <h1>A Heading</h1>;
// }

// The above Heading Component is moved to another file Heading.jsx for a better Readability
// and keep files shorter.  

// <Heading></Heading> will work same as <Heading />
// Above statement is true only when we don't have to write anything between the opening and Closing Heading tag.
// A space before closing tag is used

// function List(){
//   return <ul>
//   <li>list 1</li>
//   <li>list 2</li>
//   <li>list 3</li>
//   <li>list 4</li>
// </ul>;
// }

// The above List component has imported from List.jsx file.

ReactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById("root")
);
