import { Link } from "react-router-dom";
import logo from "../assets/logomail.png"; 

function Navbar() {
  return (
    <nav>
      <div>
        <img src={logo} alt="MailAmericas Logo" style={{ height: "32px" }} />
        <span>MailAmericas</span>
      </div>
      <div>
        <Link to="/">Inicio</Link>
        <Link to="/add">Agregar Pedido</Link>
      </div>
    </nav>
  );
}

export default Navbar;
