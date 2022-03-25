import { useEffect, useState } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import useHttpGet from "../../hooks/useHttpGet";
import Modal from "../UI/Modal";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth-slice";
import classes from "./Form.module.css";
import CloseButton from "../UI/CloseButton";

const LoginForm = (props) => {
  const [username, setUsername] = useState({ value: "", hasError: true });
  const usernameErrorMessage = "Needs to be atleast 5 chars long";
  const [password, setPassword] = useState({ value: "", hasError: true });
  const passwordErrorMessage = "Needs to be atleast 6 chars long";
  const [validForm, setValidForm] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginErrorMessage, setLoginErrorMessage] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    if ((username.hasError, password.hasError)) {
      setValidForm(false);
    } else {
      setValidForm(true);
    }
  }, [username, password]);

  useEffect(() => {
    if (!loginSuccess) {
      return;
    }
    console.log("Logging in to hotels-302!");
  }, [loginSuccess]);

  const { isLoading, error, fetchDataHandler } = useHttpGet({
    url: "https://usebookingmanagement-default-rtdb.firebaseio.com/users.json",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoginErrorMessage("");
    console.log(validForm);
    if (!validForm) {
      return;
    }
    let data = await fetchDataHandler();
    data = transformData(data);
    props.onLogin(data);

    console.log(data);
    if (data.length === 0) {
      setLoginErrorMessage("No users with that usename exists!");
    } else if (data.password !== password.value) {
      setLoginErrorMessage("Wrong Password!");
      console.log(`${data.password} !== ${password.value}`);
    } else {
      setLoginErrorMessage("");
      setLoginSuccess(true);
      dispatch(authActions.logIn());
      props.onClose();
    }
  };

  const transformData = (data) => {
    const loadedData = [];
    for (const key in data) {
      if (key == username.value) {
        loadedData.push({
          id: key,
          password: data[key].password,
          fullname: data[key].fullname,
          policy: data[key].policy,
        });
      }
    }
    return {
      id: loadedData[0].id,
      password: loadedData[0].password,
      name: loadedData[0].fullname,
      policy: loadedData[0].policy,
    };
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
            <button
              type="submit"
              className={`btn btn-primary ${classes.button}`}
            >
              Log In
            </button>
          </div>
          <div>{validForm && <span>{loginErrorMessage}</span>}</div>
        </form>
      </div>
    </Modal>
  );
};

export default LoginForm;
