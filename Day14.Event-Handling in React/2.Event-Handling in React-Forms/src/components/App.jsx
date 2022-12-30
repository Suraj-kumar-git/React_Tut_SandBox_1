import React, { useState } from "react";


function App() {
  const [isMousedOver,setMouseOver] = useState("false");
  const [header,setHeader] = useState("");
  const [name,setName] = useState("");
  function mousedOver(){
    setMouseOver(true);
  }
  function changeHeader(event){
    setHeader(event.target.value);
    console.log(event.target.value);
  }
  function updateName(){
    setName(header);
    console.log(header);
  }
  function mousedOut(){
    setMouseOver(false);
  }
  return (
    <div className="container">
      <h1>Hello {name}!</h1>
      <input onChange={changeHeader} type="text" placeholder="What's your name?" />
      <button style={{backgroundColor : isMousedOver ? "black" : "white"}}
      onMouseOver={mousedOver} 
      onMouseOut={mousedOut}
      onClick={updateName}>Submit</button>
    </div>
  );
}

export default App;
