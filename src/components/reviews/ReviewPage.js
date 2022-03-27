import React, { useEffect, useState } from "react";
import ReviewPageItem from "./ReviewPageItem";
import classes from "./ReviewPage.module.css";
const ReviewPage = (props) => {
  let [i, setI] = useState(0);
  let arrOfPages = [];

  let arrOfComments = [];
  let counter = 0;

  console.log(props.reviews[0]);
  for (let index = 0; index < props.reviews.length; index++) {
    if (counter < 5) {
      counter++;
      arrOfComments.push(props.reviews[index]);
    } else if (counter >= 5) {
      counter = 0;

      arrOfPages.push(arrOfComments);
      arrOfComments = [];
    }
  }
  arrOfPages.push(arrOfComments);
  arrOfComments = [];

  const nextPage = () => {
    if (i >= 0 && i < arrOfPages.length - 1) setI((prevState) => prevState + 1);
    else {
      setI(0);
    }
  };
  const prevPage = () => {
    if (i == 0) {
      setI(arrOfPages.length - 1);
    } else {
      setI((prevState) => prevState + -1);
    }
  };
  console.log(arrOfPages);
  return (
    <React.Fragment>
      {arrOfPages[i].map((reviewItem) => (
        <ReviewPageItem
          nextPage={nextPage}
          prevPage={prevPage}
          reviews={reviewItem}
        />
      ))}

      <div className="row">
        <button className={classes.btn} onClick={prevPage}>
          Previous
        </button>
        <button className={classes.btn} onClick={nextPage}>
          Next
        </button>{" "}
        <div className={`${classes.page}`}>
          {i + 1 + "/" + arrOfPages.length}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ReviewPage;
