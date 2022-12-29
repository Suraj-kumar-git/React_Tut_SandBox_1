import React, { useState } from "react";

// const count = React.useState();
// This is used when we have not imported the useState() from React.
// const state = useState(0);
// 0 can be accessed like state[0];
// 0 is the initial value assigned to the state[0];
// useState() takes two parameters, the 2nd parameter is linked with the
// first parameter and acts as a function to update the first parameter.
// First Parameter can be any numberic/String value.

// <--** Destructuring Elements of useState(); **-->
//  const [red,green,blue] = useState(1,2,3);
// then red = 1, green = 2 , blue = 3;

function App() {
  const [count, setCount] = useState(0); // Destructuring the parameters of useState to access its values.
  // setCount is linked with count which when assigned a value , will assign that value to count.
  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
