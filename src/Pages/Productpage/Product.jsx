import React from "react";
import "./Product.css";
import Bag from "../../assets/bag2.png";
import Yellow from "../../assets/Yellow.png";
import Red from "../../assets/Red.png";

const Product = () => {
  return (
    <div className="flexbagshoe">
      <div>
        <div className="upper">
          <h3 className="red-nike">
            FS - QUILTED MAXI <br />
            CROSS BAG
            <h3 className="oldpercent">
              <h6>
                <s> $534,33</s> <span className="discount">24% Off</span>
              </h6>
              <h6 className="current-price">$299,43</h6>
            </h3>
          </h3>
        </div>
        <img height={'358.31px'}src={Bag} />
      </div>

      <div>
        <div className="uppertext">
          <h3>
            FS - Nike Air
            <br /> Max 270 React...
          </h3>
          <h4>
            <span className="current-price">$299,43</span>
          </h4>
        </div>
        <h6 className="percent">
          <s> $534,33</s> <span className="discount">24% Off</span>
        </h6>
        <img  height={'358.31px'} src={Yellow} />
        
      </div>

      <div>
        <div className="upper">
          <h3 className="red-nike">
            FS - Nike Air
            <br /> Max 270 React...
            <br />
            <s> $534,33</s> <span className="discount">24% Off</span>
          </h3>
          <h6 className="current-priceNike">$299,43</h6>
        </div>
        <img  height={'358.31px'} src={Red} />
      </div>
    </div>
  );
};

export default Product;
