import React from "react";
import Login from "./Login";

var isLoggedIn=false;
// const time = new Date().getHours();
function App() { 
  return (isLoggedIn ? <Login /> : <h1>Hello</h1>);
  // return (time>12 ? <h1>It's above 12.</h1> : <h1>Keep Working</h1>)
}

export default App;
