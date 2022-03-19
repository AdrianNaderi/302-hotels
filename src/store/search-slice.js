import { createSlice } from "@reduxjs/toolkit";
import { filterHotels } from "../lib/hotelfilters";

const initialSearch = {
  search: "",
  country: "Country",
  fetched: false,
  all: [],
  filtered: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState: initialSearch,
  reducers: {
    storeSearch(state, action) {
      state.search = action.payload.search;
    },
    storeCountry(state, action) {
      state.country = action.payload.country;
    },
    storeFiltered(state, action) {
      state.filtered = filterHotels(state.all, state.search, state.country);
    },
    storeAll(state, action) {
      state.all = action.payload.all;
      state.fetched = true;
    },
  },
});

export const searchActions = searchSlice.actions;
export default searchSlice;
