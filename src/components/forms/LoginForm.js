import { useEffect, useState } from "react";
import Input from "../UI/Input";
import useHttpGet from "../../hooks/useHttpGet";
import Modal from "../UI/Modal";
import { useDispatch, useSelector } from "react-redux";
import { authActions, loginUserAsync } from "../../store/auth-slice";
import classes from "./Form.module.css";
import CloseButton from "../UI/CloseButton";
import LoadingSpinner from "../UI/LoadingSpinner";

const LoginForm = (props) => {
  const [username, setUsername] = useState({ value: "", hasError: true });
  const usernameErrorMessage = "Needs to be atleast 5 chars long";
  const [password, setPassword] = useState({ value: "", hasError: true });
  const passwordErrorMessage = "Needs to be atleast 6 chars long";
  const [validForm, setValidForm] = useState(false);

  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const authError = useSelector((state) => state.auth.error);
  const loading = useSelector((state) => state.http.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    if ((username.hasError, password.hasError)) {
      setValidForm(false);
    } else {
      setValidForm(true);
    }
  }, [username, password]);

  useEffect(() => {
    if (loggedIn) {
      props.onClose();
    }
  }, [loggedIn]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(validForm);
    if (!validForm) {
      return;
    }
    dispatch(loginUserAsync({ username: username.value, password: password.value }));
    if (!authError !== null) {
      event.target.reset();
      username.hasError = true;
      password.hasError = true;
    }
  };

  return (
    <Modal onClose={props.onClose}>
      <div className="text-end">
        <CloseButton className={classes["close-btn"]} onClick={props.onClose} />
      </div>
      <div className="mx-5 mb-3 px-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <Input
              label="Username"
              type="text"
              liftupInput={(username) => {
                setUsername(username);
              }}
              minimumChar={5}
              errorMessage={usernameErrorMessage}
              inputStyle={username.hasError ? { borderColor: "red" } : { borderColor: "green" }}
              labelStyle={username.hasError ? { color: "red" } : { color: "green" }}
            >
              Username:
            </Input>
            {!username.hasError && (
              <span className={classes["check-circle"]}>
                <i className="bi bi-check-circle"></i>
              </span>
            )}
          </div>

          <div className="mb-3">
            <Input
              label="Password"
              type="password"
              liftupInput={(password) => {
                setPassword(password);
              }}
              minimumChar={6}
              errorMessage={passwordErrorMessage}
              inputStyle={password.hasError ? { borderColor: "red" } : { borderColor: "green" }}
              labelStyle={password.hasError ? { color: "red" } : { color: "green" }}
            >
              Password:
            </Input>
            {!password.hasError && (
              <span className={classes["check-circle"]}>
                <i className="bi bi-check-circle"></i>
              </span>
            )}
          </div>

          <div className="text-center mb-2">
            {!loading && (
              <button type="submit" className={classes.button}>
                Log In
              </button>
            )}
            {loading && (
              <button type="submit" className={classes.button} disabled={true}>
                <LoadingSpinner size="small" color="white" />
              </button>
            )}
          </div>

          <div className="text-center">
            {authError !== null && (
              <span className="text-danger">
                <i className="bi bi-exclamation-circle"></i>&nbsp;
                {authError}
              </span>
            )}
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default LoginForm;
