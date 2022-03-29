import { createSlice } from "@reduxjs/toolkit";
import { getUsers, identify } from "../lib/userapi";
import { httpActions } from "./http-slice";

const initialAuth = {
  loggedIn: false,
  username: "",
  name: "",
  policy: "",
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

// dispatch(loginUserAsync({ username: username.value, password: password.value }));
export const loginUserAsync = (input) => {
  return async (dispatch) => {
    dispatch(httpActions.setLoading());
    const data = await getUsers();
    const user = identify(data, input);
    if (user === null) {
      dispatch(
        authActions.setAuthenticationError({
          errormessage: "User does not exist.",
        })
      );
    } else if (user.password !== input.password) {
      dispatch(authActions.setAuthenticationError({ errormessage: "Wrong password." }));
    } else {
      dispatch(
        authActions.logIn({
          username: user.id,
          name: user.name,
          policy: user.policy,
        })
      );
      console.log("logged in successfully");
    }
    dispatch(httpActions.clearLoading());
  };
};

export const authActions = authSlice.actions;
export default authSlice;
