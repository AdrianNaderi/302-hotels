import classes from "./HotelProfileImg.module.css";

const HotelProfileImg = (props) => {
  return (
    <>
      <img
        src={props.url}
        className={classes.profile}
        alt="This is the profile picture over the current hotel"
      />
    </>
  );
};

export default HotelProfileImg;
