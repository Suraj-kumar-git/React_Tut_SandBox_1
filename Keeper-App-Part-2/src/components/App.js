import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {Notes.map((props) => (
        <Note key={props.id} title={props.title} content={props.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
