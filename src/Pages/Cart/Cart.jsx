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
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0)

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const reduce = () => {
    // setCount(count - 1);
    setCount(prev => prev > 0 ? prev -1 : 0);
  }
const increase = () =>{
  setCount(count+1);
}

const reduceItem2 = () =>{
  setPrice(prev => prev > 0 ? prev -1:0)
} 
const increaseItem2 = () =>{
  setPrice(price+1)
}

// const add  = (a,b) => a+b ;
// }const add = (a, b) => a + b;


// const Subtotal = () =>{
//   setPrice(setPrice + setCount) 
// }
const item1 = 499* count;
const item2 = price* 355;
const subTotal = item1 + item2;
const total = subTotal +20 ;// const total = add(item1, item2) + 20;
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
            <p>UNIT PRICE</p>
            <p> QTY</p>
            <p>PRICE</p>
          </div>
        </div>
        <div className="g">
          <div className="cart-product-flex" id="flex">
            <div className="image-flex">
              <img width={"137px"} height={"94px"} src={Red}></img>
              <p>Nike Airmax 270 react</p>
            </div>
            <div className="price-qty">
              <p>$499</p>

              <button onClick={reduce}>-</button>
              {count}
              <button onClick={increase}>+</button>
              <p>${item1}</p>
            </div>
          </div>



          <div className="cart-product-flex1" id="flex1">
            <div className="image-flex">
              <img width={"137px"} height={"94px"} src={Blue}></img>
              <p>Nike Airmax 270 react</p>
            </div>
            <div className="price-qty">
              <p>$355</p>
              <button className="counter" onClick={reduceItem2}>-</button>
              {price}
              <button className="counter" onClick={increaseItem2}>+</button>
              <p>{item2}</p>
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
              <p> ${subTotal} </p>
              <p>$20</p>
              <p> No </p>
            </div>
          </div>
        </div>
        <div className="booking">
          <div className="flex-total">
            <p> TOTAL</p>
            <p> ${total} </p>
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
