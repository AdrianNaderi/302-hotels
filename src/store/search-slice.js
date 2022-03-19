import { createSlice } from "@reduxjs/toolkit";

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
    filterSearch(state, action) {
      const filterSearch = (name) => {
        return name.toLowerCase().includes(state.search.toLowerCase());
      };

      const filterCountry = (countrySelection) => {
        return countrySelection
          .toLowerCase()
          .includes(state.country.toLowerCase());
      };

      const filter = (loadedData) => {
        if (state.search.trim().length === 0 && state.country === "Country") {
          loadedData = loadedData;
        } else if (
          state.search.trim().length === 0 &&
          state.country !== "Country"
        ) {
          loadedData = loadedData.filter((data) =>
            filterCountry(data.location)
          );
        } else if (
          state.search.trim().length !== 0 &&
          state.country === "Country"
        ) {
          loadedData = loadedData.filter((data) => filterSearch(data.name));
        } else {
          loadedData = loadedData.filter(
            (data) => filterCountry(data.location) && filterSearch(data.name)
          );
        }
        return loadedData;
      };

      state.filtered = filter(action.payload.data);
      console.log(state.filtered);
    },
    storeAll(state, action) {
      state.all = action.payload.all;
      state.fetched = true;
    },
  },
});

export const searchActions = searchSlice.actions;
export default searchSlice;
