import React from "react";
import "./Footer.css";
import Icon from "../../assets/Icon.png";
import fcb from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import Wunion from "../../assets/Western-union.png";
import Paypal from "../../assets/Paypal.png";
import Visa from "../../assets/visalogo.png";
import Master from "../../assets/Mcard.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content-top">
        <div>
          <div className="logo-footer">
            <img src={Icon} />
            <p className="logo">E-Comm</p>
          </div>

          <p>
            Lorem Ipsum is simply dummy text of the
            <br /> printing and typesetting industry. Lorem
            <br /> Ipsum has been the industry's standard
            <br /> dummy text ever.Since the 1500s, when
            <br /> an unknown printer.
          </p>
        </div>

        <div className="socials">
          <h5>Follow Us</h5>
          <p>
            Since the 1500s, when an unknown
            <br /> printer took a galley of type and <br /> scrambled.
          </p>
          <div className="social">
            <div><img src={fcb} /></div>
            <div><img src={twitter} /></div>
            
          </div>
        </div>

        <div className="contact-us">
          <h5> Contact Us</h5>
          <p>
            E-Comm , 4578 <br /> Marmora Road,
            <br /> Glasgow D04 89GR
          </p>
        </div>
      </div>

      <div className="footer-content-bottom">
        <div className="info-footer">
          <h5> Infomation</h5>
          <p>
            About Us
            <br />
            Infomation
            <br />
            Privacy Policy
            <br />
            Terms & Conditions
          </p>
        </div>

        <div className="info-footer">
          <h5> Service</h5>
          <p>
            About Us
            <br />
            Infomation
            <br />
            Privacy Policy
            <br />
            Terms & Conditions
          </p>
        </div>

        <div className="info-footer">
          <h5> My Account </h5>
          <p>
            About Us
            <br />
            Infomation
            <br />
            Privacy Policy
            <br />
            Terms & Conditions
          </p>
        </div>

        <div className="info-footer">
          <h5> Our Offers</h5>
          <p>
            About Us
            <br />
            Infomation
            <br />
            Privacy Policy
            <br />
            Terms & Conditions
          </p>
        </div>
      </div>

      <div className="images">
        <div>
          {" "}
          <img src={Wunion} />
        </div>
        <div>
          {" "}
          <img src={Master} />
        </div>
        <div>
          {" "}
          <img src={Paypal} />
        </div>
        <div>
          
          <img src={Visa} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
