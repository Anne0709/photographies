import { Link } from "react-router";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <nav>
        <Link to="https://www.instagram.com/nanoudjeb/?igsh=MWZha2t5Nmg5OWszMw%3D%3D&utm_source=qr#">
          <img src="/instagram.png" alt="instagram-logo" />
        </Link>
        <Link to="https://fr.pinterest.com/">
          {" "}
          <img src="/pinterest.png" alt="pinterest-logo" />
        </Link>
      </nav>
    </footer>
  );
};
export default Footer;
