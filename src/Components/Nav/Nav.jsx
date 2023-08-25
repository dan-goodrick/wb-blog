import logo from "../../images/logo.webp";
import "./Nav.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
      <nav className="Nav">
        <ul className="navigation">
          <li> 
            <Link to="/"><img id="logo" src={logo} alt="BOH" /></Link>
          </li>
          <li>
            <Link to="/projects">Past Projects</Link>
          </li>
          <li>
            <Link to="/candidates">Candidates</Link>
          </li>
          <li>
            <Link to="/donate">Donate</Link>
          </li>
          <li>
            <Link to="/about"></Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
        </ul>
      </nav>
  );
}
