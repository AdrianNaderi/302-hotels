import React, { useState } from "react";
import ReviewList from "./ReviewList";
import ReviewInput from "./ReviewInput";

const ReviewStart = (props) => {
  const [isShowing, setIsShowing] = useState(false);

  const showReviews = () => {
    if (isShowing) {
      setIsShowing(false);
    } else if (!isShowing) {
      setIsShowing(true);
    }
  };

  return (
    <React.Fragment>
      {!isShowing && <button onClick={showReviews}>Show Reviews</button>}
      {isShowing && (
        <React.Fragment>
          <button onClick={showReviews}>Hide Reviews</button>
          <ReviewInput></ReviewInput>
          <ReviewList></ReviewList>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};
export default ReviewStart;
