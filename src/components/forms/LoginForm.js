import { useEffect, useState } from "react";
import Input from "../UI/Input";
import useHttpGet from "../../hooks/useHttpGet";
import Modal from "../UI/Modal";
import { useDispatch, useSelector } from "react-redux";
import { authActions, loginUserAsync } from "../../store/auth-slice";
import classes from "./Form.module.css";
import CloseButton from "../UI/CloseButton";

const LoginForm = (props) => {
  const [username, setUsername] = useState({ value: "", hasError: true });
  const usernameErrorMessage = "Needs to be atleast 5 chars long";
  const [password, setPassword] = useState({ value: "", hasError: true });
  const passwordErrorMessage = "Needs to be atleast 6 chars long";
  const [validForm, setValidForm] = useState(false);
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const authError = useSelector((state) => state.auth.error);

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

  const { isLoading, error, fetchDataHandler } = useHttpGet({
    url: "https://usebookingmanagement-default-rtdb.firebaseio.com/users.json",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(validForm);
    if (!validForm) {
      return;
    }
    dispatch(loginUserAsync({ username: username.value, password: password.value }));
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
            >
              Username:
            </Input>
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
            >
              Password:
            </Input>
          </div>

          <div className="text-center">
            <button type="submit" className={`btn btn-primary ${classes.button}`}>
              Log In
            </button>
          </div>
          <div>{!authError !== null && <span>{authError}</span>}</div>
        </form>
      </div>
    </Modal>
  );
};

export default LoginForm;
