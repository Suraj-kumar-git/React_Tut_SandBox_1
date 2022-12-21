import React from "react";
import ReactDOM from "react-dom";

// const customStyle = {
//   color: "red",              For Internal CSS
//   fontSize: "20px",
//   border : "1px solid black"
// };

// Accessing customStyle keys and assigning different values
// customStyle.color = "blue";

ReactDOM.render(
/* <div>
  <h1 style={customStyle}>Heading</h1>
</div>,  */

// The above code implements internal CSS styles
//               &
// The below code is using Inline Styles 

<div>
  <h1 style={{color : "red",fontSize : "20px",border:"1px solid black"}}>Heading</h1>
</div>, 
document.getElementById("root"));
