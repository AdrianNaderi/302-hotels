import React from "react";
import "./ReviewItem.modules.css";

const ReviewItem = (props) => {
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
