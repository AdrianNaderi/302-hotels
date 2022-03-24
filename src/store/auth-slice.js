import { createSlice } from "@reduxjs/toolkit";
import { getUsers, identifyUser } from "../lib/userapi";
import { httpActions } from "./http-slice";

const initialAuth = {
  loggedIn: true,
  username: "",
  name: "",
  policy: "admindq",
  error: null,
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
    setAuthenticationError(state, action) {
      state.error = action.payload.errormessage;
    },
  },
});

export const loginUserAsync = (input) => {
  return async (dispatch) => {
    dispatch(httpActions.setLoading());
    console.log(input);
    const data = await getUsers();
    const user = identifyUser(data);
    if (user === null) {
      dispatch(authActions.setAuthenticationError({ errormessage: "User does not exist." }));
    } else if (user.password !== input.password) {
      dispatch(authActions.setAuthenticationError({ errormessage: "Wrong password." }));
    } else {
      dispatch(authActions.logIn({ username: user.id, name: user.name, policy: user.policy }));
    }
    dispatch(httpActions.clearLoading());
  };
};

export const authActions = authSlice.actions;
export default authSlice;
