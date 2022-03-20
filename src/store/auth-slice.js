import { createSlice } from "@reduxjs/toolkit";

const initialAuth = {
  loggedIn: true,
};
const authSlice = createSlice({
  name: "auth",
  initialState: initialAuth,
  reducers: {
    logIn(state) {
      state.loggedIn = true;
    },
    logOut(state) {
      state.loggedIn = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authActions;
