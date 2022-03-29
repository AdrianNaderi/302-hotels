import React from "react";
import classes from "./ReviewItem.module.css";

const ReviewItem = (props) => {
  return (
    <>
      <div className={classes.content}>
        <p className={classes["text-content"]}>{props.review.text}</p>
        <p className={classes.author}>Written by {props.review.user}</p>
      </div>
    </>
  );
};

export default ReviewItem;
