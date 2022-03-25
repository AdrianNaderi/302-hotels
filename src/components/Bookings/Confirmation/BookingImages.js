import classes from "./Confirmation.module.css";
const BookingImages = ({ hotelurl, roomurl }) => {
  return (
    <>
      <img className={classes.img} src={hotelurl} alt="the booked hotel" />
      <img className={classes.img} src={roomurl} alt="the booked room" />
    </>
  );
};

export default BookingImages;
