import { Link } from "react-router";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <section>
        {/* <img src="/Nanou Photographie.png" alt="logo" /> */}
        <nav className="nav-categories">
          <Link to="about">A propos</Link>
          <Link to="contact">Contact</Link>
        </nav>
      </section>
    </header>
  );
};

export default Header;
