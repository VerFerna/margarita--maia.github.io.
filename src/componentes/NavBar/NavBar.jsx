import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <h1>Margarita Maia</h1>
      </Link>

      <nav>
        <ul>
          <li>
            <NavLink to="/categoria/1">Camisas</NavLink>
          </li>
          <li>
            <NavLink to="/categoria/2">Pantalones</NavLink>
          </li>

          <li>
            <NavLink to="/categoria/3">Vestidos</NavLink>
          </li>
          <li>
            <NavLink to="/categoria/4">Otros</NavLink>
          </li>
        </ul>
      </nav>

      <CartWidget />
    </header>
  );
};

export default NavBar;
