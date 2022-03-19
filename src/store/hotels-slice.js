import { createSlice } from "@reduxjs/toolkit";
import { searchActions } from "./search-slice";
const initialHotels = {
  results: [],
  filteredresults: [],
  fetched: false,
  selection: null,
};

const hotelsSlice = createSlice({
  name: "hotels",
  initialState: initialHotels,
  reducers: {
    storeHotels(state, action) {
      state.results = action.payload.hotels;
      state.fetched = true;
    },
    storeFilteredHotels(state, action) {
      state.filteredresults = action.payload.filteredresults;
    },
    selectHotel(state, action) {
      state.selection = action.payload.selection;
    },
    clearSelectedHotel(state) {
      state.selection = null;
    },
  },
});

export const searchHotels = () => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        "https://usebookingmanagement-default-rtdb.firebaseio.com/hotels.json"
      );

      return await response.json();
    };

    const transformData = (data) => {
      const loadedData = [];
      for (const key in data) {
        loadedData.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          location: data[key].location,
          rating: data[key].rating,
          nationalcurrency: data[key].nationalcurrency,
          url: data[key].url,
        });
      }
      return loadedData;
    };

    const response = await sendRequest();
    const data = transformData(response);
    dispatch(searchActions.storeAll({ all: data }));
    dispatch(searchActions.filterSearch({ data }));
  };
};

export const hotelsActions = hotelsSlice.actions;
export default hotelsSlice;
