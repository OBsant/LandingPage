import React from "react";
import CardDestinations from "./CardDestinations";
import cardOne from "../imgs/card-one.jpg";
import cardTwo from "../imgs/card-two.jpg";
import cardThree from "../imgs/card-three.jpg";

const Destinations = () => {
  return (
    <div className="destinations-container" id="destinations-container">
      <h1>Popular Destinations</h1>
      <div className="popular-destinations">
        <CardDestinations title={"Tokyo, Japan"} img={cardThree} />
        <CardDestinations title={"Florida, USA"} img={cardTwo} />
        <CardDestinations title={"Rome, Italy"} img={cardOne} />
      </div>
    </div>
  );
};

export default Destinations;
