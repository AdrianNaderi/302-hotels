import React from "react";
import ReviewItem from "./ReviewItem";

const ReviewPageItem = (props) => {
  let i = 0;

  return (
    <React.Fragment>
      {<ReviewItem key={i++} review={props.reviews} />}
      <div></div>
    </React.Fragment>
  );
};

export default ReviewPageItem;
