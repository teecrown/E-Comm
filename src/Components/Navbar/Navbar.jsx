import React from "react";
import "./Navbar.css";
import { Link } from "react-router";
import Logo from "../../assets/Group.png";
import ContactUs from "../../Pages/Contact Us/Contact-Us";
// import Home from "../../Pages/Home/Home";

const Navbar = () => {
  return (
    <div className="mom">
      <div className="Navflex">
        <div className="logo">
        <Link to="/" className="noUnderline"><img src={Logo} /> </Link> 
        </div>
        <div className="li">
          <li>
            {" "}
            <Link to="/" className="noUnderline" id="active"> Home </Link>
            </li>
          <li><Link to="" className="noUnderline">BAG</Link></li>
          <li><Link to="" className="noUnderline">SNEAKERS</Link></li>
          <li><Link to="" className="noUnderline">BELT</Link></li>      
          <li><Link to='/ContactUs' className="noUnderline"> CONTACT</Link></li>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
