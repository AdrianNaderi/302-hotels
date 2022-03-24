import { useEffect, useState, useReducer } from "react";
import classes from "./Rating.module.css";

const getRatingLayout = (rate) => {
  const prog = rate % 1 == 0 ? "0" : rate.toString().split(".")[1];
  const empty = { width: 0 };
  const full = { width: 30 };
  const progress = { width: +prog * 3.1 };
  
  if (rate === 5) {
    return [full, full, full, full, full];
  } else if (rate >= 4) {
    return [full, full, full, full, progress];
  } else if (rate >= 3) {
    return [full, full, full, progress, empty];
  } else if (rate >= 2) {
    return [full, full, progress, empty, empty];
  } else if (rate >= 1) {
    return [full, progress, empty, empty, empty];
  } else if (rate >= 0) {
    return [progress, empty, empty, empty, empty];
  }
};

const ratingReducer = (currentRating, action) => {
  if (action.type === "UPDATE_RATING") {
    let layout = getRatingLayout(action.value);
    return { heartOne: layout[0], heartTwo: layout[1], heartThree: layout[2], heartFour: layout[3], heartFive: layout[4] };
  }
};

const ratingInitializer = (rating) => {
  let layout = getRatingLayout(rating);
  return { heartOne: layout[0], heartTwo: layout[1], heartThree: layout[2], heartFour: layout[3], heartFive: layout[4] };
};

const Rating = (props) => {
  const [rating, dispatchRating] = useReducer(ratingReducer, props.rating, ratingInitializer);
  useEffect(() => {
    dispatchRating({ type: "UPDATE_RATING", value: +props.rating });
  }, [props.rating]);

  return (
    <div>
      <div className={classes.heartcontainer}>
        <div className={classes.heartcanvas} style={rating.heartOne}>
          <img className={classes.heart} src="/img/ratingheart.png" alt="heartrating" />
        </div>
      </div>
      <div className={classes.heartcontainer}>
        <div className={classes.heartcanvas} style={rating.heartTwo}>
          <img className={classes.heart} src="/img/ratingheart.png" alt="heartrating" />
        </div>
      </div>
      <div className={classes.heartcontainer}>
        <div className={classes.heartcanvas} style={rating.heartThree}>
          <img className={classes.heart} src="/img/ratingheart.png" alt="heartrating" />
        </div>
      </div>
      <div className={classes.heartcontainer}>
        <div className={classes.heartcanvas} style={rating.heartFour}>
          <img className={classes.heart} src="/img/ratingheart.png" alt="heartrating" />
        </div>
      </div>
      <div className={classes.heartcontainer}>
        <div className={classes.heartcanvas} style={rating.heartFive}>
          <img className={classes.heart} src="/img/ratingheart.png" alt="heartrating" />
        </div>
      </div>
    </div>
  );
};

export default Rating;
