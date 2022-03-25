import { createSlice } from "@reduxjs/toolkit";
import { filterUserBookings, getBookings, postBooking } from "../lib/bookingsapi";
import { httpActions } from "./http-slice";

const initialBooking = {
  booking: null,
  bookings: [],
};

const bookingSlice = createSlice({
  name: "booking",
  initialState: initialBooking,
  reducers: {
    storeBookings(state, action) {
      state.bookings = action.payload.bookings;
    },
    storeBooking(state, action) {
      state.booking = action.payload.booking;
    },
  },
});

// postBookingAsync
export const postBookingAsync = (data) => {
  return async (dispatch) => {
    dispatch(httpActions.setLoading());
    const bookingResult = await postBooking(data);
    dispatch(bookingActions.storeBooking({ booking: data }));
    dispatch(httpActions.clearLoading());
  };
};

// getUserBookingsAsync
export const getUserBookingsAsync = (user) => {
  return async (dispatch) => {
    dispatch(httpActions.setLoading());
    const data = await getBookings();
    const userBookings = filterUserBookings(data, user);
    dispatch(httpActions.clearLoading());
    dispatch(bookingActions.storeBookings({ bookings: userBookings }));
  };
};

export const bookingActions = bookingSlice.actions;
export default bookingSlice;
