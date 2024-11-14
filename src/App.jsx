import "./App.css";
import { About } from "./Components/About/About";
import { Menu } from "./Components/Menu/Menu";
import { Start } from "./Components/Start/Start";

export function App() {
  return (
    <main>
      <Menu />
      <Start />
      <About />
    </main>
  );
}
