import React from "react";
import Title from "./Title";
import Content from "./Content";


// function passTitle(props){
//   return props.title;
// }

// function passContent(props){
//   return props.content;
// }

function Note(props){
  return (<div className="note">
    <Title title={props.title}/>
    <Content content={props.content}/>
  </div>);
}

export default Note;