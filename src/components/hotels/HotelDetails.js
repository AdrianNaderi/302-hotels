import RoomList from "../rooms/RoomList";
import DateTimePicker from "../UI/DateTimePicker";
import classes from "./HotelDetails.module.css";
const HotelDetails = (props) => {
  const hotel = props.details;
  const handleCancelDetails = () => {
    props.cancelDetails();
  };

  return (
    <div className={classes.details}>
      <img src={hotel.url} className={classes.profile} />
      <h1>{hotel.name}</h1>
      <p>{hotel.description}</p>
      <br />
      <p>{hotel.location}</p>
      <p>Rating: {hotel.rating}</p>
      <br />
      <br />
      <div className={classes.components}>
        <div className={classes.component}>
          <p>Component 1</p>
        </div>
        <div className={classes.component}>
          <p>Component 2</p>
        </div>
      </div>
      <RoomList />
      <div className={classes.checkout}>
        <div className="bg-dark p-5 row">
          <div className="col-2">
            <button
              className="btn-lg btn-danger w-100 p-3"
              onClick={handleCancelDetails}
            >
              Back
            </button>
          </div>
          <DateTimePicker />
          <div className="col-2">
            <button
              className="btn-lg btn-success w-100 p-3"
              onClick={handleCancelDetails}
            >
              Book
            </button>
          </div>
          <div className="col-4">
            <h1 className="text-light text-end">Total Price: 5040 SEK</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
