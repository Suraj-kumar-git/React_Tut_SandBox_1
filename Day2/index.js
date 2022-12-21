import React from "react";
import ReactDOM from "react-dom";

const name = "Suraj Kumar";
// const year =new Date().getFullYear();
const date = new Date();
const year = date.getFullYear();
const img = "https://picsum.photos/id/1/200/300";
ReactDOM.render(
  <div>
    <div>
      <img
        className="food-img"
        alt="noodles"
        src={img}
      ></img>
    </div>
    <h2 className="heading">Heading with CSS</h2>
    <p>Created by {name}!</p>
    <p>&copy; {year}.</p>
  </div>,
  document.getElementById("root")
);
