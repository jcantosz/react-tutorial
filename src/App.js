import { render } from "react-dom";
import SearchParams from "./SearchParams";

const App = (props) => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

render(<App />, document.getElementById("root"));
