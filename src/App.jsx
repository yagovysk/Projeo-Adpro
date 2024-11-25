import "./App.css";
import { About } from "./Components/About/About";
import { Depoiments } from "./Components/Depoiments/Depoiments";
import { Footer } from "./Components/Footer/Footer";
import { Menu } from "./Components/Menu/Menu";
import { Services } from "./Components/Services/Services";
import { Start } from "./Components/Start/Start";

export function App() {
  return (
    <main>
      <Menu />
      <Start />
      <About />
      <Services />
      <Depoiments />
      <Footer />
    </main>
  );
}
