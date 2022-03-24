import { createSlice } from "@reduxjs/toolkit";

const initialHttp = {
  loading: null,
  error: null,
  errormessage: null,
  success: null,
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
      state.loading = null;
    },
    clearError(state) {
      state.error = null;
      state.errormessage = null;
    },
    clearSuccess(state) {
      state.success = null;
    },
  },
});

export const httpActions = httpSlice.actions;
export default httpSlice;
