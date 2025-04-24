// // import React, { useState }from "react";

// import "./ModalPay.css";
// import { Link } from "react-router";

// const ModalPay = () => {
//     // const [ modal, setModal] = useState(false);

//   return (
//     <div>
//         <button
// className="modal-btn">
//         </button>
//       <div className="modal">
//         <div className="modal-content">
//           <h2>Make Payment</h2>
//           <br />
//           <div className="mother-flex">
//             <div>
//               <input
//                 className="modal-imput"
//                 type="text"
//                 placeholder="First Name"
//                 required
//               />
//               <input
//                 className="modal-imput"
//                 type="text"
//                 placeholder="Email Address"
//                 required
//               />
//               <h3>Select Mode Of Payment</h3>
//               <div>
//                 {/* <label htmlFor="cardNumber">Card Number:</label> */}

//                 <label htmlFor="creditCard">
//                   CreditCardOrDebit
//                   <input type="checkbox" name="creditCard" value="yes" />{" "}
//                 </label><br/>

//                 <label htmlFor="creditCard">
//                 Paypal
//                   <input type="checkbox" name="Paypal"  />{" "}
//                 </label><br/>

//                 <label htmlFor="creditCard">
//                 Bank Transfer
//                   <input type="checkbox" name="Bank Transfer" />{" "}
//                 </label><br/>

//               </div>
//             </div>

//             <div className="display-block">
//               <input
//                 className="modal-imput"
//                 type="text"
//                 placeholder="Last Name"
//                 required
//               />
//               <input
//                 className="Delivery"
//                 type="text"
//                 placeholder="Address for Delivery"
//                 required
//               />
//               <input
//                 className="modal-imput"
//                 type="text"
//                 placeholder="Mobile Phone"
//                 required
//               />
//             </div>
//           </div>

//           {/* <label htmlFor="expiryDate">Expiry Date:</label> */}
//           {/* <input type="text" id="expiryDate" name="expiryDate" required /> */}

//           {/* <label htmlFor="cvv">CVV:</label> */}
//           {/* <input type="text" id="cvv" name="cvv" required /> */}

//           <button type="submit">Go To Payment</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ModalPay;

// import React from 'react'

// const ModalPay = () => {
//   return (
//     <div className='modal-overlay'>
//       <div className='modal-content'>
//         <h2 className=''>Modal Title</h2>
//         <p className=''> this is a simple  Modal page</p>

//       </div>

//     </div>
//   )
// }

// export default ModalPay

import React, { useState } from "react";
import { Modal } from "antd";
import "./ModalPay.css";

const ModalPay = ({ isModalOpen, handleOk, handleCancel }) => {
  const [showMe, setShowMe] = useState(true);
  const [showNext, setShowNext] = useState(false)
  const [showCVV, setShowCVV] = useState(false)

  const handlePayment = () => {
    setShowMe(false);
    setShowNext(true)
  }
  const handleSuccess =() =>{
    setShowMe(false);
    setShowNext(false)
    setShowCVV(true)
  }
  return (
    <Modal
      // title="Basic Modal"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
      width="1021px"
    >
      {/* <div className="modal-content"> */}
      <>
      {showMe && <div className="modal-content">
        <h2>Make Payment</h2>
        <br />
        <div className="mother-flex">
          <div>
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
            <h3>Select Mode Of Payment</h3>
            <div>
              <div className="label-group">
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
                <input className="check-box" type="checkbox" name="Paypal" />
              </div>
              <div className="label-group">
                <label htmlFor="creditCard">Bank Transfer</label>
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
        <button type="submit" onClick={handlePayment}>Go To Payment</button>
      </div>}
      {
        showNext && <div> 
          I am moving to the next page
           <label htmlFor="expiryDate">Expiry Date:</label>
          <input type="text" id="expiryDate" name="expiryDate" required />
          <label htmlFor="cvv">CVV:</label>
          <input type="text" id="cvv" name="cvv" required />
          <button type="submit" onClick={handleSuccess}> Confirm </button> 
       </div>
        
      }
      {
        showCVV && <div>
          <label htmlFor="cvv">CVV:</label>
          <input type="text" id="cvv" name="cvv" required />
          
        </div>
        }
      </>
        {/* <label htmlFor="expiryDate">Expiry Date:</label>
          <input type="text" id="expiryDate" name="expiryDate" required />
        <button type="submit">Go To Payment</button> */}
      {/* </div> */}
    </Modal>
  );
};

export default ModalPay;
