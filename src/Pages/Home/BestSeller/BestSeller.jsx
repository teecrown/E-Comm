import React from "react";
import "./BestSeller.css";
import Image1 from "../../../assets/Image1.png";
import Image2 from "../../../assets/bag.png";
import Image3 from "../../../assets/Red.png";
import Image4 from "../../../assets/Image4.png";
import Image1b from "../../../assets/Image1b.png";
import Image2b from "../../../assets/Image2b.png";
import Product from "../../Productpage/Product"
import { Link } from "react-router";



function BestSeller() {
  return (
    <div>
      <h2 className="BSeller"> BEST SELLER </h2>
      <div className="listflex">
        <p className="li-BestSeller"> <Link to= "/Product"> All </Link> </p>
        <p className="li-BestSeller">Bags</p>
        <p className="li-BestSeller">Sneakers</p>
        <p className="li-BestSeller"> Belt </p>
        <p className="li-BestSeller">Sunglasses</p>
      </div>
      <div>
        <div className="productFlex">
          <div>
            <div className="cardcontainer">
              {" "}
              <img src={Image1} />
              <div className="prodDescriptn">
                <p>
                  Nike Air Max 270 React
                  <br />
                  ⭐⭐⭐⭐★
                  <br />
                  <span className="new-price">$299,43</span>
                  <s>$534.33</s>
                  <span className="discount">24% Off</span>
                </p>
              </div>
            </div>
          </div>

          <div className="cardcontainer">
            {" "}
            <img  src={Image2} />
            <div className="prodDescriptn">
              <p>
                Nike Air Max 270 React
                <br />
                ⭐⭐⭐⭐★
                <br />
                <span className="new-price">$299,43</span>
                <s>$534.33</s>
                <span className="discount">24% Off</span>
              </p>
            </div>
          </div>
          <div className="cardcontainer">
            {" "}
            <img  src={Image4} />
            <div className="prodDescriptn">
              <p>
                {/* {" "} */}
                Nike Air Max 270 React
                <br />
                ⭐⭐⭐⭐★
                <br />
                <span className="new-price">$299,43</span>
                <s>$534.33</s>
                <span className="discount">24% Off</span>
              </p>
            </div>
          </div>

          <div className="cardcontainer">
            {" "}
            <img width="299.5px" height={"272.5px"} src={Image1b} />
            <div className="prodDescriptn">
              <p>
                {/* {" "} */}
                Nike Air Max 270 React
                <br />
                ⭐⭐⭐⭐★
                <br />
                <span className="new-price">$299,43</span>
                <s>$534.33</s>
                <span className="discount">24% Off</span>
              </p>
            </div>
          </div>
        </div>

        <div className="productFlex">
          <div className="cardcontainer">
            {" "}
            <img width="299.5px" height={"272.5px"} src={Image1b} />
            <div className="prodDescriptn">
              <p>
                {/* {" "} */}
                Nike Air Max 270 React
                <br />
                ⭐⭐⭐⭐★
                <br />
                <span className="new-price">$299,43</span>
                <s>$534.33</s>
                <span className="discount">24% Off</span>
              </p>
            </div>
          </div>
          <div className="cardcontainer">
            {" "}
            <img height={"272.5px"} src={Image2b} />
            <div className="prodDescriptn">
              <p>
                {/* {" "} */}
                Nike Air Max 270 React
                <br />
                ⭐⭐⭐⭐★
                <br />
                <span className="new-price">$299,43</span>
                <s>$534.33</s>
                <span className="discount">24% Off</span>
              </p>
            </div>
          </div>
          <div className="cardcontainer">
            {" "}
            <img  height={"272.5px"} src={Image1} />
            <div className="prodDescriptn">
              <p>
                {/* {" "} */}
                Nike Air Max 270 React
                <br />
                ⭐⭐⭐⭐★
                <br />
                <span className="new-price">$299,43</span>
                <s>$534.33</s>
                <span className="discount">24% Off</span>
              </p>
            </div>
          </div>
          <div className="cardcontainer">
            {" "}
            <img height={"272.5px"} src={Image4} />
            <div className="prodDescriptn">
              <p>
                {/* {" "} */}
                Nike Air Max 270 React
                <br />
                ⭐⭐⭐⭐★
                <br />
                <span className="new-price">$299,43</span>
                <s>$534.33</s>
                <span className="discount">24% Off</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="loadmore"> <Link to="/Product"> LOAD MORE</Link> </p>
      
    </div>
  );
}

export default BestSeller;
