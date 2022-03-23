import React from "react";

const ReviewItem = (props) => {
  console.log(props.review);
  return (
    <React.Fragment>
      <li>
        {props.review.user} {props.review.text}
      </li>
    </React.Fragment>
  );
};

export default ReviewItem;
