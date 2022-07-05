import { render } from "react-dom";
import Pet from "./Pet";

const App = (props) => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Mugang" animal="Dog" breed="Malamute" />
      <Pet name="Heena" animal="Dog" breed="Great Pyrenees" />
      <Pet name="Nayla" animal="Dog" breed="Pit Bull" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
