import React from "react";
import "/public/styles.css"

function Heading(){
const date = new Date();
const time = date.getHours();
const customStyle = {
  color : ""
};
let greeting;
  if(time<12){
    greeting="Good Morning";
    customStyle.color = "red";
  }
  else if(time<18){
    greeting="Good Afternoon";
    customStyle.color = "Green";
  }
  else {
    greeting= "Good Night";
    customStyle.color = "blue";
  }
  return (<div style={customStyle} className = "heading">{greeting}</div>);
}

export default Heading;
