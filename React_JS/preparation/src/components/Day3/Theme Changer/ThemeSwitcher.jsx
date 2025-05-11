import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div style={{ backgroundColor: theme == "light" ? "white" : "black" }}>
      <h1>Theme Switcher App</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>Your Current Theme is : {theme}</p>
    </div>
  );
};

export default ThemeSwitcher;