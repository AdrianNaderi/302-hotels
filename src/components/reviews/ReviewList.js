import React from "react";
import ReviewPage from "./ReviewPage";

const ReviewList = (props) => {
  let i = 0;
  let reviews = [];

  if (props.reviewList != null) {
    Object.values(props.reviewList).forEach((value) => reviews.push(value));
    reviews = reviews.filter((element) => element.hotell === props.hotel.name);
  }

  return (
    <React.Fragment>
      <ReviewPage
        onHide={() => {
          props.onHide();
        }}
        onWrite={() => {
          props.onWrite();
        }}
        reviews={reviews}
      />
    </React.Fragment>
  );
};
export default ReviewList;
