import React from "react";
import "./Navbar.css";
import { Link } from "react-router";
import Icon from "../../assets/Icon.png";
// import Home from "../../Pages/Home/Home";

const Navbar = () => {
  return (
    <div className="mom">
      <div className="Navflex">
        <div className="logoflex">
          <img src={Icon} />
          <p className="logo">E-Comm</p>
        </div>
        <div className="li">
          <span>
            {" "}
            <Link to="/"> Home </Link>
          </span>
          <li>BAG</li>
          <li>SNEAKERS</li>
          <li>BELTS</li>
          <li>CONTACT</li>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
