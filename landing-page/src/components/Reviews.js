import React from "react";
import userOne from "../imgs/user-one.jpg";
import userTwo from "../imgs/user-two.jpg";
import userThree from "../imgs/user-three.jpg";
import CardReviews from "./CardReviews";

const Reviews = () => {
  return (
    <div className="review" id="review-user">
      <h1>Reviews</h1>
      <div className="review-user">
        <CardReviews imgUser={userOne} name={"Sarah Johnson"} />
        <CardReviews imgUser={userTwo} name={"Michael Brown"} />
        <CardReviews imgUser={userThree} name={"Emily Davis"} />
      </div>
    </div>
  );
};

export default Reviews;
