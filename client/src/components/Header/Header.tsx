import { Link } from "react-router";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <section>
        <img src="/Nanou Photographie.png" alt="logo" />
        <nav className="nav-categories">
          <Link to="about">
            <span>A propos</span>
          </Link>
          <Link to="contact">
            <span>Contact</span>
          </Link>
        </nav>
      </section>
    </header>
  );
};

export default Header;
