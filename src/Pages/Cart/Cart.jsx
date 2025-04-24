import React from "react";
import "./Cart.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Red from "../../assets/Red.png";
import Blue from "../../assets/Image1.png";
import { Link } from "react-router";
import { useState } from "react";
import Modal from "../../Pages/ModalPay/ModalPay";
import ModalPay from "../../Pages/ModalPay/ModalPay";

const Cart = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };


  return (
    <div>
      <Header />
      <Navbar />
      <div className="cart-header">
        <p>
          <span> Home/</span>
          <span> Hot Deal/</span> Nike Airmax 270 React
        </p>
      </div>
      <div>
        <div className="cart-product">
          <p>Product</p>
          <div className="cart-product-flex">
            <p>PRICE</p>
            <p> QTY</p>
            <p>UNIT PRICE</p>
          </div>
        </div>
        <div className="g">
          <div className="cart-product-flex" id="flex">
            <div className="image-flex">
              <img width={"137px"} height={"94px"} src={Red}></img>
              <p>Nike Airmax 270 react</p>
            </div>
            <div className="price-qty">
              <p>$998</p>
              <p className="increase"> - 2 + </p>
              <p>$499</p>
            </div>
          </div>

          <div className="cart-product-flex1" id="flex1">
            <div className="image-flex">
              <img width={"137px"} height={"94px"} src={Blue}></img>
              <p>Nike Airmax 270 react</p>
            </div>
            <div className="price-qty">
              <p>$998</p>
              <p className="increase">- 2 +</p>
              <p>$499</p>
            </div>
          </div>
        </div>
        <div className="input-search">
          <div>
            <label>
              <input type="search" placeholder=" Voucher code" />
              <button className="redeem"> Redeem</button>
            </label>
          </div>
          <div className="flex-shipping">
            <div>
              <p> Subtotal </p>
              <p> Shipping fee </p>
              <p> Coupon </p>
            </div>
            <div>
              <p>$998</p>
              <p>$20</p>
              <p> No </p>
            </div>
          </div>
        </div>
        <div className="booking">
          <div className="flex-total">
            <p> TOTAL</p>
            <p> $399 </p>
          </div>
          <div>
            <button type="submit" className="btn-modal"onClick={showModal}>
              Checkout 
            </button>
          </div>
        </div>
      </div>
     < ModalPay isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel}/>
      <Footer />
    </div>
  );
};

export default Cart;
