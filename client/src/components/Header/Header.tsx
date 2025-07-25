import { Link } from "react-router";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <section className="essai">
        <img
          className="logo"
          src="/21Oct24 Nazzasi Free Upload (2).png"
          alt="logo"
        />

        <nav className="nav-categories">
          <Link to="/">
            <span>Accueil</span>
          </Link>
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
