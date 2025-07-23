import { Link } from "react-router";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <h1>Je suis le header</h1>
      <nav>
        <Link to="about">A propos</Link>
        <Link to="contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
