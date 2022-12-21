import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const time = date.getHours();

// console.log(time);
let greeting;
const customStyle = {
  color: ""
}

if(time<12){
  greeting = "Good Morning";
  customStyle.color="Red";
}else if(time<18){
  greeting = "Good Aftrnoon";
  customStyle.color="Green";
}else {
  greeting="Good Night";
  customStyle.color="Green";
}




 ReactDOM.render(
 <div>
   <h1 className="heading" style={customStyle}>{greeting}</h1>
 </div>,
  document.getElementById("root")
 );
