import HotelProfileImg from "../../../UI/HotelProfileImg";
import classes from "./ImagePreview.module.css";

const ImagePreview = (props) => {
  return (
    <>
      <img src={props.url} className={props.isvalid ? `${classes.profile}` : `${classes.profile} ${classes.invalid}`} alt="This is the current hotel" onError={(e) => props.handleError(e)} />
    </>
  );
};

export default ImagePreview;
