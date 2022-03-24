import React, { useState, useEffect, useCallback } from "react";
import ReviewList from "./ReviewList";
import ReviewInput from "./ReviewInput";
import useHttpGet from "../../hooks/useHttpGet";
import { useSelector } from "react-redux";

const ReviewStart = (props) => {
  const [isShowing, setIsShowing] = useState(false);
  const [reviews, setReviews] = useState([]);
  const user = useSelector((state) => state.auth.name);

  async function addReviewHandler(review) {
    const response = await fetch(
      "https://hotell-344214-default-rtdb.europe-west1.firebasedatabase.app/reviews.json",
      {
        method: "POST",
        body: JSON.stringify(review),
        headers: { "Content-Type": "application/json" },
      }
    );

    const data = await response.json();
    console.log(data);
  }

  const { isLoading, error, fetchDataHandler } = useHttpGet({
    url: "https://hotell-344214-default-rtdb.europe-west1.firebasedatabase.app/reviews.json",
  });

  const getReviewHandler = useCallback(async () => {
    let dataLocal = await fetchDataHandler();
    setReviews(dataLocal);
  }, [fetchDataHandler]);

  useEffect(() => {
    getReviewHandler();
  }, [getReviewHandler]);

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
          <ReviewInput
            addReview={addReviewHandler}
            getReviews={getReviewHandler}
            name={user}
            hotel={props.hotel}
          ></ReviewInput>

          <ReviewList reviewList={reviews} hotel={props.hotel}></ReviewList>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};
export default ReviewStart;
