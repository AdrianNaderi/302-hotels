import React from "react";
import classes from "./ReviewItem.module.css";

const ReviewItem = (props) => {
  return (
    <>
      <div className={classes.content}>
        <p className={classes["text-content"]}>{props.review.text}</p>
        {/* <p className={classes["text-content"]}>Learn how to modify with a handful of options for alignment, ordering, and  thanks to our flexbox grid system. Plus, see how to use column classes to manage widths of non-grid elements. </p> */}

        <p className={classes.author}>Written by {props.review.user}</p>
      </div>
    </>
  );
};

export default ReviewItem;
