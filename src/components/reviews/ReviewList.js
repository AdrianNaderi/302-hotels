import React from "react";
import ReviewItem from "./ReviewItem";
const ReviewList = (props) => {
  let i = 0;
  let reviews = [];
  Object.values(props.reviewList).forEach((value) => reviews.push(value));
  console.log(reviews);
  console.log(props.hotel.hotell);
  reviews = reviews.filter((element) => element.hotell === props.hotel.name);

  console.log(reviews);

  return (
    <React.Fragment>
      {reviews.map((reviewItem) => (
        <ReviewItem key={i++} review={reviewItem} />
      ))}
    </React.Fragment>
  );
};
export default ReviewList;
