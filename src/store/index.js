import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./search-slice";
import authSlice from "./auth-slice";
import bookingSlice from "./booking-slice";


const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
    auth: authSlice.reducer,
    booking: bookingSlice.reducer,
  },
});

export default store;
