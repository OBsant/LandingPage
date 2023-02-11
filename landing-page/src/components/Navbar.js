import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Travel World</h1>
      <div className="navbar-itens">
        <a href="#about-Container">About Us</a>
        <a href="#destinations-container">Popular Destinations</a>
        <a href="#review-user">Reviews</a>
      </div>
    </div>
  );
};

export default Navbar;
