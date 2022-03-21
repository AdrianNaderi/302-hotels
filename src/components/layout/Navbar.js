import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/auth-slice";
import LoginForm from "../Forms/LoginForm";
import RegisterForm from "../Forms/RegisterForm";
import classes from "./Navbar.module.css";

const Navbar = (props) => {
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const policy = useSelector((state) => state.auth.policy);

  const dispatch = useDispatch();

  const [logInShown, setLogInShown] = useState(false);
  const [registerShown, setRegisterShown] = useState(false);

  const showLoginHandler = () => {
    setLogInShown(true);
  };

  const hideLoginHandler = () => {
    setLogInShown(false);
  };

  const showRegisterHandler = () => {
    setRegisterShown(true);
  };

  const hideRegisterHandler = () => {
    setRegisterShown(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {logInShown && <LoginForm onClose={hideLoginHandler} />}
      {registerShown && <RegisterForm onClose={hideRegisterHandler} />}
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <i className="bi bi-building"></i>&nbsp; 302-Hotels
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          {!loggedIn && (
            <div className="navbar-nav">
              <a
                className="nav-link active"
                aria-current="page"
                href="#"
                onClick={showLoginHandler}
              >
                Login
              </a>
              <a className="nav-link" onClick={showRegisterHandler}>
                Register
              </a>
            </div>
          )}
          {loggedIn && (
            <div className="navbar-nav">
              <a
                className="nav-link active"
                onClick={() => {
                  dispatch(authActions.logOut());
                }}
              >
                Logout
              </a>
              <a className="nav-link" onClick={showRegisterHandler}>
                My page
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
