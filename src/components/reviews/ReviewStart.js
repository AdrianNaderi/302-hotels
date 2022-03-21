import React, { useState } from "react";
import ReviewList from "./ReviewList";
import ReviewInput from "./ReviewInput";

const ReviewStart = (props) => {
  const [isShowing, setIsShowing] = useState(false);

  async function addReviewHandler(review) {
    const response = fetch(
      "https://hotell-344214-default-rtdb-europe-west1.firebasedatabase.app/reviews",
      {
        method: "POST",
        body: JSON.stringify(review),
        headers: { "Content-Type": "application/json" },
      }
    );

    const data = await response.json();
    console.log(data);
  }

  async function getReviewHandler() {
    const response = fetch(
      "https://hotell-344214-default-rtdb-europe-west1.firebasedatabase.app/reviews"
    );

    let data = response.JSON.stringify;

    return data;
  }

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
          <ReviewInput addReview={addReviewHandler}></ReviewInput>
          <ReviewList showReviews={getReviewHandler}></ReviewList>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};
export default ReviewStart;
