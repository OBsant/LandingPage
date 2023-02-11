import React from "react";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <div className="itens">
        <div className="logo">
          <h1>Travel World</h1>
        </div>
        <div className="more">
          <h3>Learn More</h3>
          <p>Comunity</p>
          <p>Jobs</p>
          <p>Privacy Policy</p>
          <p>Enviroment</p>
        </div>
        <div className="contact">
          <h3>Contact Us</h3>
          <p>Phone: 123-123-1230</p>
          <p>Suport: suport@travel.com</p>
        </div>
        <div className="social">
          <h3>Social</h3>
          <div className="icon-container">
            <div className="icon">
              <AiFillInstagram />
            </div>
            <div className="icon">
              <AiFillFacebook />
            </div>
            <div className="icon">
              <AiFillTwitterCircle />
            </div>
            <div className="icon">
              <AiFillYoutube />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
