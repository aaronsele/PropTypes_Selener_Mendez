import { Link } from "react-router-dom";
import logo from "../assets/logomail.png"; 
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="MailAmericas Logo" className="navbar-logo" />
        <span className="navbar-title">MailAmericas</span>
      </div>
      <div className="navbar-links">
        <Link to="/">Inicio</Link>
        <Link to="/add">Agregar Pedido</Link>
      </div>
    </nav>
  );
}

export default Navbar;
