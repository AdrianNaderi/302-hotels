import classes from "./CheckOut.module.css";
import DateTimePicker from "../../UI/DateTimePicker";
import { useContext } from "react";
import TimespanContext from "../../../store/timespan-context";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { searchActions } from "../../../store/search-slice";
import { bookingActions, postBookingAsync } from "../../../store/booking-slice";

const CheckOut = (props) => {
  const loggedin = useSelector((state) => state.auth.loggedIn);
  const userFullname = useSelector((state) => state.auth.name);
  const ctx = useContext(TimespanContext);
  const hotel = props.hotel;
  const room = props.room;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
    dispatch(searchActions.clearOne());
  };

  const handleTime = (time) => {
    let activeDate = new Date(time);
    activeDate.setDate(activeDate.getDate() + 1);
    const yearNow = activeDate.getFullYear().toString();
    const monthNow = activeDate.getMonth() + 1 < 10 ? `0${activeDate.getMonth() + 1}` : (activeDate.getMonth() + 1).toString();
    const dateNow = activeDate.getDate() < 10 ? `0${activeDate.getDate()}` : activeDate.getDate().toString();
    return `${yearNow}-${monthNow}-${dateNow}`;
  };

  const handleBooking = () => {
    let user = userFullname;
    const booking = {
      user,
      hotel,
      room,
      details: {
        fromdate: ctx.fromDate,
        todate: ctx.toDate,
        timespan: ctx.timespan,
        totalcost: ctx.timespan * room.cost,
        bookingdate: handleTime(Date.now()),
      },
    };
    dispatch(postBookingAsync(booking));
    dispatch(searchActions.clearOne());
    navigate("/bookingconfirmation");
  };

  return (
    <>
      <div className={`${classes.checkout}`}>
        <div className="bg-dark p-5 row">
          <div className="col-2">
            <button className="btn-lg btn-danger w-100 p-3" onClick={goBack}>
              Back
            </button>
          </div>
          <DateTimePicker />
          <div className="col-2">
            {room && loggedin && (
              <button className="btn-lg btn-success w-100 p-3" onClick={handleBooking}>
                Book
              </button>
            )}
            {!room && (
              <button className="btn-lg btn-secondary w-100 p-3" onClick={handleBooking} disabled>
                Book
              </button>
            )}
          </div>
          <div className="col-4">
            {loggedin && <h1 className="text-light text-end">{room && `Total Price:  ${ctx.timespan * room.cost} SEK`} </h1>}
            {!loggedin && <h1 className="text-light text-end">{`Login, to continue...`} </h1>}
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
