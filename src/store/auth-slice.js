import { createSlice } from "@reduxjs/toolkit";

const initialAuth = {
  loggedIn: true,
  username: "",
  name: "",
  policy: "admindq",
};

const authSlice = createSlice({
  name: "search",
  initialState: initialAuth,
  reducers: {
    logIn(state, action) {
      state.loggedIn = true;
      state.username = action.payload.username;
      state.name = action.payload.name;
      state.policy = action.payload.policy;
    },
    logOut(state) {
      state.loggedIn = false;
      state.username = "";
      state.name = "";
    },
    setAthorization(state, action) {
      state.policy = action.payload.type;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
