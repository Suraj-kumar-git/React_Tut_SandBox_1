import React from "react";
import Image from "./Image";
import Info from "./info";

function Para(para){
  return <Info 
  what={para.id}
  />;
}
function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <Para id={props.id}/>
        <h2 className="name">{props.name}</h2>
        <Image img={props.img}/>
      </div>
      <div className="bottom">
        <Info what={props.tel}/>
        <Info what={props.email}/>
      </div>
    </div>
  );
}

export default Card;
