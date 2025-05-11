import "./Theme.css";
import ThemeSwitcher from "./ThemeSwitcher";
import { ThemeProvider } from "./ThemeContext";

export default function Theme() {
//   return <div className="App">Hello</div>;
  return (
    <div className="App">
      <ThemeProvider>
        <ThemeSwitcher />
      </ThemeProvider>
    </div>
  );
}