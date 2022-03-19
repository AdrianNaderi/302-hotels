import { createSlice } from "@reduxjs/toolkit";

const initialUI = { search: true, details: false, confirmation: false };

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUI,
  reducers: {
    searchMode(state) {
      state.search = true;
      state.details = false;
      state.confirmation = false;
    },
    detailsMode(state) {
      state.search = false;
      state.details = true;
      state.confirmation = false;
    },
    confirmationMode(state) {
      state.search = false;
      state.details = false;
      state.confirmation = true;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
