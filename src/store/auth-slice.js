import { createSlice } from "@reduxjs/toolkit";

const initialAuth = {
  loggedIn: true,
  policy: "admindq",
};

const authSlice = createSlice({
  name: "search",
  initialState: initialAuth,
  reducers: {
    logIn(state) {
      state.loggedIn = true;
    },
    logOut(state) {
      state.loggedIn = false;
    },
    setAthorization(state, action) {
      state.policy = action.payload.type;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
