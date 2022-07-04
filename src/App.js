import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { id: "brand" }, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Mugang",
      animal: "Dog",
      breed: "Malamute",
    }),
    React.createElement(Pet, {
      name: "Heena",
      animal: "Dog",
      breed: "Great Pyrenees",
    }),
    React.createElement(Pet, {
      name: "Nayla",
      animal: "Dog",
      breed: "Pitbull",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
