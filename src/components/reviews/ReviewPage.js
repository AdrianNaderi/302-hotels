import React, { useEffect, useState } from "react";
import ReviewPageItem from "./ReviewPageItem";
import classes from "./ReviewPage.module.css";
import { useSelector } from "react-redux";
const ReviewPage = (props) => {
  let [i, setI] = useState(0);
  let arrOfPages = [];
  let arrOfComments = [];
  let counter = 0;

  const loggedin = useSelector((state) => state.auth.loggedIn);

  for (let index = 0; index < props.reviews.length; index++) {
    arrOfComments = [];
    arrOfComments.push(props.reviews[index]);
    arrOfPages.push(arrOfComments);
  }

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

  return (
    <React.Fragment>
      {arrOfPages[i].map((reviewItem, index) => (
        <ReviewPageItem key={index} nextPage={nextPage} prevPage={prevPage} reviews={reviewItem} />
      ))}

      <div className={classes["divider-box"]}>
        <hr className={classes.divider} />
      </div>
      <div className={`${classes["control-section"]} row`}>
        <div className="col-5 text-end">
          <button className={`${classes.btn} ${classes.direction}`} onClick={prevPage}>
            <i className="bi bi-chevron-left"></i>
          </button>
          <button
            onClick={() => {
              props.onHide();
            }}
            className={`${classes.btn} ${classes.hide}`}
          >
            <i className="bi bi-x-square"></i>
          </button>
        </div>
        <div className="col-2 text-center align-self-center">
          <div className={`${classes.page}`}>{i + 1 + "/" + arrOfPages.length}</div>
        </div>
        <div className="col-5">
          {loggedin && (
            <button
              onClick={() => {
                props.onWrite();
              }}
              className={`${classes.btn} ${classes.create}`}
            >
              <i className="bi bi-pencil-square"></i>
            </button>
          )}
          {!loggedin && (
            <button className={`${classes.btn} ${classes.inactive}`} disabled>
              <i className="bi bi-pencil-square"></i>
            </button>
          )}

          <button className={`${classes.btn} ${classes.direction}`} onClick={nextPage}>
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ReviewPage;
