import React, { useState, useEffect, useCallback } from "react";
import ReviewList from "./ReviewList";
import ReviewInput from "./ReviewInput";
import useHttpGet from "../../hooks/useHttpGet";
import { useSelector } from "react-redux";
import classes from "./ReviewStart.module.css";
const ReviewStart = (props) => {
  const [isShowing, setIsShowing] = useState(false);
  const [isWriting, setIsWriting] = useState(false);
  const [reviews, setReviews] = useState([]);
  const user = useSelector((state) => state.auth.name);
  const loggedIn = useSelector((state) => state.auth.loggedIn);

  async function addReviewHandler(review) {
    const response = await fetch("https://hotell-344214-default-rtdb.europe-west1.firebasedatabase.app/reviews.json", {
      method: "POST",
      body: JSON.stringify(review),
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();
    getReviewHandler();
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
    <>
      {!isShowing && (
        <div onClick={showReviews} className={classes["display-size"]}>
          <a  className={`${classes["show-reviews-text"]} lead fw-bold`}>
            Still not sure? Check out the reviews!
          </a>
        </div>
      )}
      {isShowing && !isWriting && (
        <div className={classes["review-size"]}>
          <button onClick={showReviews} className={classes.btn}>
            Hide Reviews
          </button>
          <ReviewList reviewList={reviews} hotel={props.hotel}></ReviewList>
        </div>
      )}
      {isShowing && isWriting && <>{loggedIn && <ReviewInput addReview={addReviewHandler} getReviews={getReviewHandler} name={user} hotel={props.hotel} />}</>}
    </>
  );
};
export default ReviewStart;
