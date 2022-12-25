import React from "react";
import Contacts from "./Contact";
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Contacts 
      name="Suraj" 
      img-src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" 
      mob="7352442612" 
      email="suraj@gmail.com"/>
      <Contacts name="Surbhi" 
      img-src="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg" 
      mob="7903680755" 
      email="surbhi@gmail.com"/>
      <Contacts name="Nitin" 
      img-src="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png" 
      mob="7250967616" 
      email="nitin@gmail.com"/>
    </div>
  );
}

export default App;
