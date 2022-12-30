import React, { useState } from "react";
// Both the APP and App2 are exchangeable
// We are just using the <form> inside App2.
function App2(){
  const[name , setName] = useState("");
  const[header,setHeader] = useState("");
  function updateHeader(event){
    setHeader(event.target.value);
    event.preventDefault();
    //<form></form> automatically refreshes itself after on onSubmit event.
    //event.preventDefault() is used to hold the refreshing 
    // of page due to the default property of <form></form>. 
  }
  function updateName(){
    setName(header);
  }
  return (
    <form onSubmit={updateName}>
    <div className="container">
      <h1>Hello {name}!</h1>
      <input onChange={updateHeader} type="text" placeholder="Enter your name.."/>
      <button type="submit">Submit</button>
    </div>
    </form>
  );
}
export default App2;