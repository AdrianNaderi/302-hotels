import { createSlice } from "@reduxjs/toolkit";

const initialAuth = {
  loggedIn: true,
  username: null,
  name: null,  
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
      state.username = null;
      state.name = null;
    },
    setAthorization(state, action) {
      state.policy = action.payload.type;
    }
  },
});

export const authActions = authSlice.actions;
export default authSlice;
