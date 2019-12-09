//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

const time = new Date().getHours();
console.log(time);

var greetStyle = null;
var greet = null;
if (time > 0 && time < 12) {
  greetStyle = { color: "red" };
  greet = "Good Morning";
} else if (time >= 12 && time < 18) {
  greetStyle = { color: "green" };
  greet = "Good Afternoon";
} else {
  greetStyle = { color: "blue" };
  greet = "Good evening";
}
ReactDOM.render(
  <h1 className="heading" style={greetStyle}>
    {greet}
  </h1>,
  document.getElementById("root")
);
