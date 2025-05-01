import React from 'react'
import "./Contact-Us.css";
import Card from "../../assets/Cart2.png";


const Contact = () => {
  return (
    <div>

<div className="credit-cardflex">
              <div>
                <img src={Card}/>
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


    </div>
  )
}

export default Contact