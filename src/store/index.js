import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import hotelsSlice from "./hotels-slice";
import searchSlice from "./search-slice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    hotels: hotelsSlice.reducer,
    search: searchSlice.reducer,
  },
});

export default store;
