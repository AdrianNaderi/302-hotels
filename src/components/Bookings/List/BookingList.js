import classes from "./BookingList.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserBookingsAsync } from "../../../store/booking-slice";
import LoadingSpinner from "../../UI/LoadingSpinner";
import BookingListItem from "./BookingListItem";

const BookingList = () => {
  const loading = useSelector((state) => state.http.loading);
  const user = useSelector((state) => state.auth.name);
  const bookings = useSelector((state) => state.booking.bookings);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserBookingsAsync({ user }));
  }, []);

  const bookinglist = bookings.map((booking) => <BookingListItem key={booking.id} id={booking.id} user={booking.user} hotel={booking.hotel} room={booking.room} details={booking.details} />);
  return (
    <>
      <div className="text-center mt-5 container ">
        {loading && <LoadingSpinner size="large" color="black" />}
        {bookings.length > 0 && (
          <>
            <div className={`${classes["col-name"]} row`}>
              <div className="col-2">BookingID</div>
              <div className="col-2">HotelName</div>
              <div className="col-1">Room</div>
              <div className="col-1">Check-In</div>
              <div className="col-1">Check-Out</div>
              <div className="col-1">Total Cost</div>
            </div>
            <div>{bookinglist}</div>
          </>
        )}
        {bookings.length == 0 && <p>No Bookings Found</p>}
      </div>
    </>
  );
};

export default BookingList;
