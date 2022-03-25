import { createSlice } from "@reduxjs/toolkit";

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
// getUserBookingsAsync

export const bookingActions = bookingSlice.actions;
export default bookingSlice;
