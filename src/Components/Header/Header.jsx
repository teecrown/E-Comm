import React from "react";
import "./Header.css";
import { Link } from "react-router";
import Home from "../../Pages/Home/Home";
import Product from "../../Pages/Productpage/Product";
import Profile from '../../assets/profile.png'
import Cart from '../../assets/Cart2.png'
import SearchIcon from '../../assets/search-icon.png'
const Header = () => {
  return (
    <div className="whole">
      <div className="headflex">
        <div className="leftflex">
          <p>EN▾</p>
          <p> USD▾</p>
        </div>
        <div className="rightflex">
        <img src={Profile}/>
          <p> My profile </p>
          <Link to= "/Cart" ><img className="cart" src={Cart}/> </Link>
          <p> <Link to='/Product'> Items </Link></p>
          <p className="header-price">$0.00</p>
          <img className="header-img" src={SearchIcon}/>
        </div>
      </div>
    </div>
  );
};

export default Header;
