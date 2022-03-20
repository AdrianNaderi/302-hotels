import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./search-slice";
import authSlice from "./auth-slice";

const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
    auth: authSlice.reducer,
  },
});

export default store;
