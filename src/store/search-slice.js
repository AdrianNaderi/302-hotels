import { createSlice } from "@reduxjs/toolkit";
import { filterHotel, filterHotels } from "../lib/hotelfilters";
import { getHotels } from "../lib/hotelsapi";


const initialSearch = {
  search: "",
  country: "Country",
  id: "",
  fetched: false,
  all: [],
  filtered: [],
  single: null,
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
    storeId(state, action) {
      state.id = action.payload.id;
    },
    storeFiltered(state) {
      state.filtered = filterHotels(state.all, state.search, state.country);
    },
    storeAll(state, action) {
      state.all = action.payload.all;
      state.fetched = true;
    },
    storeOne(state, action) {
      state.single = filterHotel(state.all, state.id);
    },
    clearOne(state) {
        state.single = null;
    }
  },
});

export const searchHotels = () => {
    return async (dispatch) => {
      const data = await getHotels();
      dispatch(searchActions.storeAll({ all: data }));
      dispatch(searchActions.storeFiltered({ data }));
    };
  };
  export const searchHotel = () => {
    return async (dispatch) => {
      const data = await getHotels();
      dispatch(searchActions.storeAll({ all: data }));
      dispatch(searchActions.storeOne());
    };
  };

export const searchActions = searchSlice.actions;
export default searchSlice;