import { createSlice } from "@reduxjs/toolkit";
import { getHotels } from "../lib/hotelsapi";
import { searchActions } from "./search-slice";

const initialHttp = {
  loading: false,
  error: false,
  errormessage: false,
  success: false,
};

const httpSlice = createSlice({
  name: "http",
  initialState: initialHttp,
  reducers: {
    setLoading(state) {
      state.loading = true;
    },
    setError(state, action) {
      state.error = true;
      state.errormessage = action.payload.errormessage;
    },
    setSuccess(state) {
      state.success = true;
    },
    clearLoading(state) {
      state.loading = false;
    },
    clearError(state) {
      state.error = false;
      state.errormessage = false;
    },
    clearSuccess(state) {
      state.success = false;
    },
  },
});

export const searchHotelsAsync = () => {
  return async (dispatch) => {
    dispatch(httpActions.setLoading());
    const data = await getHotels();
    const mapedIds = data.map((data) => parseInt(data.id));
    const lastId = mapedIds[mapedIds.length - 1];
    dispatch(searchActions.storeAll({ all: data, id: lastId }));
    dispatch(searchActions.storeFiltered({ data }));
    dispatch(httpActions.clearLoading());
  };
};

export const httpActions = httpSlice.actions;
export default httpSlice;
