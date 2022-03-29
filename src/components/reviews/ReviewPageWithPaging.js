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
    if (counter === 0) {
      arrOfComments.push(props.reviews[index]);
      counter++;
    } else if (counter >= 5) {
      counter = 0;
    }

    arrOfPages.push(arrOfComments);
    arrOfComments = [];
    arrOfComments.push(props.reviews[index]);
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
        <ReviewPageItem nextPage={nextPage} prevPage={prevPage} reviews={reviewItem} />
      ))}

      <div className="text-center"></div>

      <div className={`${classes["control-section"]} row`}>
        <div className="col-4 text-end">
          <button className={classes.btn} onClick={prevPage}>
            <i class="bi bi-chevron-left"></i>
          </button>
        </div>
        <div className="col-4 text-center">
          <div className={`${classes.page}`}>{i + 1 + "/" + arrOfPages.length}</div>
        </div>
        <div className="col-4">
          <button className={classes.btn} onClick={nextPage}>
            <i class="bi bi-chevron-right"></i>
          </button>
          <button>
            <i className="bi bi-pencil-square"></i>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ReviewPage;
