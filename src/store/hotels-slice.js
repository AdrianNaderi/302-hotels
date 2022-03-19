import { createSlice } from "@reduxjs/toolkit";
import { searchActions } from "./search-slice";
import { getHotels } from "../lib/hotelsapi";

const initialHotels = {
  selection: null,
};

const hotelsSlice = createSlice({
  name: "hotels",
  initialState: initialHotels,
  reducers: {
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
    const data = await getHotels();
    dispatch(searchActions.storeAll({ all: data }));
    dispatch(searchActions.storeFiltered({ data }));
  };
};

export const hotelsActions = hotelsSlice.actions;
export default hotelsSlice;
