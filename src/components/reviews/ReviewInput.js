import React, { useRef } from "react";
import classes from "./ReviewInput.module.css";
const ReviewInput = (props) => {
  const textRef = useRef("");

  const submitReview = (event) => {
    console.log(textRef);
    event.preventDefault();
    let review = {
      user: props.name,
      hotell: props.hotel.name,
      text: textRef.current.value,
      date: Date.now(),
    };

    textRef.current.value = "";
    props.addReview(review);
  };

  return (
    <React.Fragment>
      <div>
        <form onSubmit={submitReview}>
          <textarea
            type="text"
            className={classes.comment}
            ref={textRef}
          ></textarea>
          <div>
            <button className={classes.btn} type="submit">
              Submit Review
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};
export default ReviewInput;
