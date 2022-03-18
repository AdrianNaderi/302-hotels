import classes from "./CheckOut.module.css";
import DateTimePicker from "../UI/DateTimePicker";
import { useContext } from "react";
import TimespanContext from "../../store/timespan-context";

const CheckOut = (props) => {
  const handleCancelDetails = () => {
    props.cancelDetails();
  };
  const hotel = props.hotel;
  const room = props.room;

  const ctx = useContext(TimespanContext);

  const handleTime = (time) => {
    let activeDate = new Date(time);
    activeDate.setDate(activeDate.getDate() + 1);
    const yearNow = activeDate.getFullYear().toString();
    const monthNow =
      activeDate.getMonth() + 1 < 10
        ? `0${activeDate.getMonth() + 1}`
        : (activeDate.getMonth() + 1).toString();
    const dateNow =
      activeDate.getDate() < 10
        ? `0${activeDate.getDate()}`
        : activeDate.getDate().toString();
    return `${yearNow}-${monthNow}-${dateNow}`;
  };

  const handleBooking = () => {
    let user = "test";
    const booking = {
      user,
      hotel,
      room,
      fromdate: ctx.fromDate,
      todate: ctx.toDate,
      timespan: ctx.timespan,
      totalcost: ctx.timespan * room.cost,
      bookingdate: handleTime(Date.now()),
    };
    props.onBooking(booking);
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
            {room && (
              <button
                className="btn-lg btn-success w-100 p-3"
                onClick={handleBooking}
              >
                Book
              </button>
            )}
            {!room && (
              <button
                className="btn-lg btn-secondary w-100 p-3"
                onClick={handleBooking}
                disabled
              >
                Book
              </button>
            )}
          </div>
          <div className="col-4">
            <h1 className="text-light text-end">
              {props.room &&
                `Total Price:  ${ctx.timespan * props.room.cost} SEK`}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
