import React from "react";
import "./Header.css";
import { Link } from "react-router";
// import Home from "../../Pages/Home/Home";
// import Product from "../../Pages/Productpage/Product";
import Profile from "../../assets/profile.png";
import Cart from "../../assets/Cart2.png";
import SearchIcon from "../../assets/search-icon.png";
const Header = () => {
  return (
    <div className="mom">
      <div className="headerflex">
        <div className="leftflex">
         
    <select id="Language" className="language-select">
    <option value="English">ENG</option>
    <option value="French">French</option>
    <option value="Spanish">Spanish</option>
    <option value="Yoruba">Yoruba</option>
  </select>


          <select id="Currency" className="currency-select">
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="NGN">NGN</option>
          </select>
        </div>

        <div className="rightflex">
          <img src={Profile} />
         <Link>
          <p> My profile </p>
         </Link>
          <Link to="/Cart">
            <img className="cart" src={Cart} />{" "}
          </Link>
          <p>
            {" "}
            <Link to="/Product"> Items </Link>
          </p>
          <p className="header-price">$0.00</p>
          <img className="header-img" src={SearchIcon} />
        </div>
      </div>
    </div>
  );
};

export default Header;
