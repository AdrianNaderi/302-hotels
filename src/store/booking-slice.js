import { createSlice } from "@reduxjs/toolkit";
import { postBooking } from "../lib/bookingsapi";
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
    console.log(bookingResult);
    dispatch(bookingActions.storeBooking({ booking: data }));
    dispatch(httpActions.clearLoading());
  };
};

// getUserBookingsAsync

export const bookingActions = bookingSlice.actions;
export default bookingSlice;
