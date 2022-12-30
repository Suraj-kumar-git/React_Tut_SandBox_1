import React, { useState } from "react";

function App() {

  const[head1,setHead1] = useState("");
  const[head2,setHead2] = useState("");
  function updateHead1(event){
    setHead1(event.target.value);
  }
  function updateHead2(event){
    setHead2(event.target.value);
  }

  return (
    <div className="container">
      <h1>Hello {head1} {head2}</h1>
      <form>
        <input onChange={updateHead1} name="fName" placeholder="First Name" />
        <input onChange={updateHead2} name="lName" placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
