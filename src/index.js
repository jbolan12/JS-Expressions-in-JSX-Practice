import React from "react";
import ReactDOM from "react-dom";

const yourname = "Georgie Bolaños";
const d = new Date();
let currentYear = d.getFullYear();

ReactDOM.render(
  <div>
    <p>Created by {yourname}!</p>
    <p>Copyright {currentYear}.</p>
  </div>,
  document.getElementById("root")
);


