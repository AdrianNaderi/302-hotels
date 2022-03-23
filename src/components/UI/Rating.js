import { useEffect, useState } from "react";
import classes from "./Rating.module.css";

const Rating = (props) => {
  const inactive = { width: 0 };
  const [rating, setRating] = useState([false, false, false, false, false]);
  useEffect(() => {
    evaluateRating();
  }, [props.rating]);

  const evaluateRating = () => {
    const rating = props.rating;
    if (rating >= 4) {
      setRating([true, true, true, true, false]);
    } else if (rating >= 3) {
      setRating([true, true, true, false, false]);
    } else if (rating >= 2) {
      setRating([true, true, false, false, false]);
    } else if (rating >= 1) {
      setRating([true, false, false, false, false]);
    } else {
      setRating([false, false, false, false, false]);
    }
  };

  return (
    <div>
      <div className={classes.heartcontainer}>
        <div className={classes.heartcanvas} style={rating[0] ? { width: 20 } : { width: 0 }}>
          <img className={classes.heart} src="/img/ratingheart.png" alt="heartrating" />
        </div>
      </div>
      <div className={classes.heartcontainer}>
        <div className={classes.heartcanvas} style={rating[1] ? {} : { width: 0 }}>
          <img className={classes.heart} src="/img/ratingheart.png" alt="heartrating" />
        </div>
      </div>
      <div className={classes.heartcontainer}>
        <div className={classes.heartcanvas} style={rating[2] ? {} : { width: 0 }}>
          <img className={classes.heart} src="/img/ratingheart.png" alt="heartrating" />
        </div>
      </div>
      <div className={classes.heartcontainer}>
        <div className={classes.heartcanvas} style={rating[3] ? {} : { width: 0 }}>
          <img className={classes.heart} src="/img/ratingheart.png" alt="heartrating" />
        </div>
      </div>
      <div className={classes.heartcontainer}>
        <div className={classes.heartcanvas} style={rating[4] ? {} : { width: 0 }}>
          <img className={classes.heart} src="/img/ratingheart.png" alt="heartrating" />
        </div>
      </div>
    </div>
  );
};

export default Rating;
