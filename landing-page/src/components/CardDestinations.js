import React from "react";

const CardDestinations = ({ title, img }) => {
  return (
    <div
      className="card-destinations"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 53, 84, .4), rgba(0, 53, 84, .4)), url(${img})`,
      }}
    >
      <h2>{title}</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  );
};

export default CardDestinations;
