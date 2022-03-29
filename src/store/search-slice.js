import { createSlice } from "@reduxjs/toolkit";
import { deleteHotelInCollection, filterHotel, filterHotels, updateHotelInCollection } from "../lib/hotelfilters";
import { getHotels } from "../lib/hotelsapi";
import { httpActions } from "./http-slice";

const initialSearch = {
  search: "",
  country: "Country",
  id: "",
  lastId: 0,
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
      state.lastId = action.payload.id;
    },
    storeOne(state, action) {
      state.single = filterHotel(state.all, state.id);
    },
    clearOne(state) {
      state.single = null;
    },
    addHotel(state, action) {
      let addArr = [...state.all, action.payload.hotel];
      state.all = addArr;
      state.lastId = action.payload.hotel.id;
    },
    updateHotel(state, action) {
      state.all = action.payload.updatedhotels;
    },
    deleteHotel(state, action) {
      console.log(action.payload.removeid);
      state.all = deleteHotelInCollection(state.all, action.payload.removeid);
    },
  },
});


export const searchHotel = () => {
  return async (dispatch) => {
    const data = await getHotels();
    const mapedIds = data.map((data) => parseInt(data.id));
    const lastId = mapedIds[mapedIds.length - 1];

    dispatch(searchActions.storeAll({ all: data, id: lastId }));
    dispatch(searchActions.storeOne());
  };
};

export const searchHotelAsync = () => {
  return async (dispatch) => {
    dispatch(httpActions.setLoading());
    const data = await getHotels();
    const mapedIds = data.map((data) => parseInt(data.id));
    const lastId = mapedIds[mapedIds.length - 1];

    dispatch(searchActions.storeAll({ all: data, id: lastId }));
    dispatch(searchActions.storeOne());
    dispatch(httpActions.clearLoading());
  };
};

export const searchActions = searchSlice.actions;
export default searchSlice;
