import classes from "./HotelProfileImg.module.css";

const HotelProfileImg = (props) => {
  return (
    <>
      <img
        src={props.url}
        className={classes.profile}
        alt="This is the current hotel"
      />
    </>
  );
};

export default HotelProfileImg;
