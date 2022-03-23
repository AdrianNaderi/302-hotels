import React from "react";
import ReviewItem from "./ReviewItem";
const ReviewList = (props) => {
  let reviews = [];
  Object.values(props.reviewList).forEach((value) => reviews.push(value));

  return (
    <React.Fragment>
      <ul>
        {reviews.forEach((element) => {
          <ReviewItem review={element}>{console.log(element)}</ReviewItem>;
        })}
      </ul>
    </React.Fragment>
  );
};
export default ReviewList;
