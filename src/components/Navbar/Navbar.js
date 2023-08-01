import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../Logo/Logo";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/products" className="link">
          Products
        </Link>
      </div>
      <div className="navbar__right">
        {" "}
        <Logo />
      </div>
    </div>
  );
};

export default Navbar;
