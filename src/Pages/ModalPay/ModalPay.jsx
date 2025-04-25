import React, { useState } from "react";
import { Modal } from "antd";
import "./ModalPay.css";
import Paypal from "../../assets/Paypal.png";
import Card from "../../assets/CreditCard.png";
import SuccessIcon from "../../assets/Success-icon.png";
// import { Link } from "react-router";

const ModalPay = ({ isModalOpen, handleOk, handleCancel }) => {
  const [showMe, setShowMe] = useState(true);
  const [showNext, setShowNext] = useState(false);
  const [showCVV, setShowCVV] = useState(false);

  const handlePayment = () => {
    setShowMe(false);
    setShowNext(true);
  };
  const handleSuccess = () => {
    setShowMe(false);
    setShowNext(false);
    setShowCVV(true);
  };
  const handleComplete = () => {
    setShowCVV(false);
    handleOk();
  };
  // const handleBack = () => {
  //   setShowMe(true);
  //   setShowNext(false)
  // }
  return (
    <Modal
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
      width="1021px"
    >
      {/* <div className="modal-content"> */}
      <>
        {showMe && (
          <div className="modal-content">
            <h2> Make Payment </h2>
            <h4 className="prog-flex">
              {" "}
              <span className="progress-bar">1</span>-
              <span className="progress-bar2">2</span>-
              <span className="progress-bar2">3</span>
            </h4>
            <br />
            <div className="mother-flex">
              <div className="Payment-opt">
                <input
                  className="modal-imput"
                  type="text"
                  placeholder="First Name"
                  required
                />
                <input
                  className="modal-imput"
                  type="text"
                  placeholder="Email Address"
                  required
                />
                <h3>Select Method Of Payment</h3>
                <div>
                  <div className="label-group" id="checked">
                    <label htmlFor="creditCard">Credit Card Or Debit</label>
                    <input
                      className="check-box"
                      type="checkbox"
                      name="creditCard"
                      value="yes"
                    />{" "}
                  </div>
                  <div className="label-group">
                    <label htmlFor="creditCard">Paypal</label>
                    <input
                      className="check-box"
                      type="checkbox"
                      name="Paypal"
                    />
                  </div>
                  <div className="label-group">
                    <div id="flexpayment">
                      <img src={Paypal} />
                      <label htmlFor="creditCard">Bank Transfer</label>
                    </div>
                    <input
                      className="check-box"
                      type="checkbox"
                      name="Bank Transfer"
                    />
                  </div>
                </div>
              </div>

              <div className="display-block">
                <input
                  className="modal-imput"
                  type="text"
                  placeholder="Last Name"
                  required
                />
                <input
                  className="Delivery"
                  type="text"
                  placeholder="Address for Delivery"
                  required
                />
                <input
                  className="modal-imput"
                  type="text"
                  placeholder="Mobile Phone"
                  required
                />
              </div>
            </div>
            <button className="btn" type="submit" onClick={handlePayment}>
              Go To Payment
            </button>
          </div>
        )}
        {showNext && (
          <div className="modal-content">
            <h2> Make Payment </h2>
            <h4 className="prog-flex">
              {" "}
              <span className="progress-bar">1</span>-
              <span className="progress-bar">2</span>-
              <span className="progress-bar2">3</span>
            </h4>
            <br />
            <div className="credit-cardflex">
              <div>
                <img src= {Card}/>
              </div>
              <div>
                <div>
                  <input
                    type="text"
                    className="modal-imput"
                    id=""
                    placeholder="Card Number"
                    required
                  />
                </div>

                <div className="cvv-flex">
                  <div>
                    <input
                      type="text"
                      id="cvv-flex"
                      className="modal-imput"
                      placeholder="Expiry"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      id="cvv-flex"
                      className="modal-imput"
                      placeholder="CCV"
                    />
                  </div>
                </div>
                <div>
                  <input
                    type="text"
                    className="modal-imput"
                    id=""
                    placeholder="Holder Number"
                    required
                  />
                </div>
              </div>
            </div>

            <button className="btn" type="submit" onClick={handleSuccess}>
              {" "}
              Confirm{" "}
            </button>
          </div>
        )}
        {showCVV && (
          <div className="modal-content">
            <h2> Make Payment </h2>
            <h4 className="prog-flex">
              {" "}
              <span className="progress-bar">1</span>-
              <span className="progress-bar">2</span>-
              <span className="progress-bar">3</span>
            </h4>
            <br />
            <div className="success-icon">
              {" "}
              <img src={SuccessIcon} />
            </div>
            <button className="btn" type="submit" onClick={handleComplete}>
              {" "}
              Success{" "}
            </button>
          </div>
        )}
      </>
    </Modal>
  );
};

export default ModalPay;
