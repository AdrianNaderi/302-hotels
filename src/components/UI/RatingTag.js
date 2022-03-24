import classes from "./RatingTag.module.css";

const RatingTag = ({ rating }) => {
  return (
    <div className={classes.tag}>
      <p className={classes.tagtext}>{rating}</p>
    </div>
  );
};

export default RatingTag;
