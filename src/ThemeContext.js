import { createContext } from "react";

// mimicking useState
// ie. const [theme, setTheme] useState("#F06D06")
const ThemeContext = createContext(["#F06D06", () => {}]);

export default ThemeContext;
