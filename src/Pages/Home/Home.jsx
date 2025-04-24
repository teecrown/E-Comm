import React from "react";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import './Home.css';
import Hero from "../../Components/Hero/Hero";
import Product from "../Productpage/Product";
import BestSeller from "./BestSeller/BestSeller";
import BlueSection from "./BlueSection/BlueSection";
import Footer from "../../Components/Footer/Footer";
import ModalPay from "../ModalPay/ModalPay";
const Home = () => {
  return (
    <div className="home">
      <Header />
       <Navbar />
        <Hero/>
      <Product/>
      <BestSeller/>
      <BlueSection/>
      <Footer/> 
      <ModalPay/>
       
    </div>
  );
};

export default Home;
