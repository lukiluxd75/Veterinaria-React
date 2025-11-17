import { Link } from "react-router-dom";

const MenuBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Veterinaria Virtual</div>

      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/contenido">Contenido</Link></li>
        <li><Link to="/servicios">Servicios</Link></li>
        <li><Link to="/contactos">Contactos</Link></li>
        <li><Link to="/acerca">Acerca de</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default MenuBar;
