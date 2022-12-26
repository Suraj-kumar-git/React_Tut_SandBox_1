import React from "react";
import Card from "./Card";
import Emojipedia from "../emojipedia";

function createCard(props){
  return <Card 
  key={props.id}
  emoji={props.emoji}
  name={props.name}
  details={props.meaning}/>;
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {Emojipedia.map(createCard)};
      </dl>
    </div>
  );
}

export default App;
