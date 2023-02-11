import React from "react";

const Card = ({ title, icon }) => {
  return (
    <div className="card">
      <h1>{icon}</h1>
      <h2>{title}</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  );
};

export default Card;
