import { Link } from "react-router";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <h1>Je suis le footer</h1>
      <nav>
        <Link to="">Instagram</Link>
        <Link to="">Pinterest</Link>
      </nav>
    </footer>
  );
};
export default Footer;
