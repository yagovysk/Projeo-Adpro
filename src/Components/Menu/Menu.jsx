import logo from "../../assets/logo.png";
import "./Menu.css";

export function Menu() {
  return (
    <nav className="nav-menu">
      <img className="logo" src={logo} alt="" />
      <ul className="menu-list">
        <li>Sobre nós</li>
        <li>Serviços</li>
        <li>depoimentos</li>
      </ul>
      <a className="contact-button" href="" target="_blank">
        Entre em contato!
      </a>
    </nav>
  );
}
