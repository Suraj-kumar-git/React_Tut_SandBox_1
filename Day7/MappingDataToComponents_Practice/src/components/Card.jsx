import React from "react";
import Details from "./Details";
import Name from "./Name";
import Emoji from "./Emoji";
// import Emojipedia from "../emojipedia";

function Card(props){
  return (<div className="term">
  <dt>
    <Emoji emoji={props.emoji}/>
    <Name name={props.name}/>
  </dt>
  <dd>
    <Details details={props.details}/>
  </dd>
</div>);
}
export default Card;