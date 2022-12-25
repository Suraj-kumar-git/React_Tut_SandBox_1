import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src="{props.img}" alt="photo1" />
      <p>{props.mob}</p>
      <p>{props.emal}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card name="Suraj" img="source1" mob="7352442612" emal="suraj@gmail.com"/>
    <Card name="Äanchal" img="source2" mob="7254855020" emal="aanchal@gmail.com"/>
  </div>,
  document.getElementById("root")
);
