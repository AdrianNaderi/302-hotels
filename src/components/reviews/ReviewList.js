import React from "react";
import ReviewItem from "./ReviewItem";
const ReviewList = (props) => {
  let reviews = [];
  Object.values(props.reviewList).forEach((value) =>
    reviews.push(value).where(value.hotell === props.hotel)
  );

  return (
    <React.Fragment>
      {reviews.map((reviewItem) => (
        <ReviewItem review={reviewItem} />
      ))}
    </React.Fragment>
  );
};
export default ReviewList;
