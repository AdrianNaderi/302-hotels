import React from "react";
import "./ReviewItem.modules.css";

const ReviewItem = (props) => {
  console.log(props.review);
  return (
    <React.Fragment>
      <div className="divUser">
        {props.review.user}
        <div className="divText">{props.review.text}</div>
      </div>
    </React.Fragment>
  );
};

export default ReviewItem;
