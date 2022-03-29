import React, { useRef } from "react";
import classes from "./ReviewInput.module.css";
const ReviewInput = (props) => {
  const textRef = useRef("");

  const submitReview = (event) => {
    event.preventDefault();
    let review = {
      user: props.name,
      hotell: props.hotel.name,
      text: textRef.current.value,
      date: Date.now(),
    };

    textRef.current.value = "";
    if (review.text != "") {
      props.addReview(review);
    }
    props.cancelWrite();
  };

  return (
    <React.Fragment>
      <div>
        <form onSubmit={submitReview}>
          <textarea type="text" className={classes.comment} ref={textRef}></textarea>
          <div className={`${classes["btn-box"]} text-end`}>
            <button onClick={() => props.cancelWrite()} className={`${classes.btn} ${classes.hide}`} type="button">
              <i class="bi bi-x-square"></i>
            </button>
            <button className={`${classes.btn} ${classes.submit}`} type="submit">
              Submit Review
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};
export default ReviewInput;
