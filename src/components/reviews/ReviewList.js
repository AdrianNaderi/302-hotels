import React from "react";
import ReviewPage from "./ReviewPage";

const ReviewList = (props) => {
  let i = 0;
  let reviews = [];

  if (props.reviewList != null) {
    Object.values(props.reviewList).forEach((value) => reviews.push(value));
    console.log(reviews);
    console.log(props.hotel.hotell);
    reviews = reviews.filter((element) => element.hotell === props.hotel.name);
  }

  console.log(reviews);

  return (
    <React.Fragment>
      <ReviewPage reviews={reviews} />
    </React.Fragment>
  );
};
export default ReviewList;
