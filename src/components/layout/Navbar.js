import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/auth-slice";
import LoginForm from "../Forms/LoginForm";
import RegisterForm from "../Forms/RegisterForm";
import classes from "./Navbar.module.css";
import NavLinks from "./NavLinks";
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const policy = useSelector((state) => state.auth.policy);
  const userName = useSelector((state) => state.auth.name);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const logOut = () => {
    dispatch(authActions.logOut());
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light ${classes["nav-color"]}`}
    >
      {logInShown && (
        <LoginForm
          onClose={hideLoginHandler}
          onLogin={(user) => {
            dispatch(
              authActions.logIn({
                username: user.id,
                name: user.name,
                policy: user.policy,
              })
            );
          }}
        />
      )}
      {registerShown && <RegisterForm onClose={hideRegisterHandler} />}
      <div className="container-fluid">
        <a
          className={`navbar-brand  ${classes.link}`}
          onClick={() => {
            navigate("/");
          }}
        >
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
          <ul className="nav">
            <NavLinks
              loggedIn={loggedIn}
              logOut={logOut}
              userName={userName.split(" ")[0]}
              showLoginHandler={showLoginHandler}
              showRegisterHandler={showRegisterHandler}
              policy={policy}
            />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
