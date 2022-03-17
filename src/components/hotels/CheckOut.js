import classes from "./CheckOut.module.css";
import DateTimePicker from "../UI/DateTimePicker";

const CheckOut = (props) => {
  const handleCancelDetails = () => {
    props.cancelDetails();
  };
  return (
    <>
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
    </>
  );
};

export default CheckOut;
