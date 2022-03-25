import { useEffect, useState } from "react";
import Input from "../UI/Input";
import useHttpGet from "../../hooks/useHttpGet";
import Modal from "../UI/Modal";
import classes from "./Form.module.css";
import CloseButton from "../UI/CloseButton";
import { useDispatch, useSelector } from "react-redux";
import { authActions, loginUserAsync } from "../../store/auth-slice";

const RegisterForm = (props) => {
  const [username, setUsername] = useState({ value: "", hasError: true });
  const usernameErrorMessage = "Needs to be atleast 5 chars long";
  const [fullname, setFullname] = useState({ value: "", hasError: true });
  const fullnameErrorMessage = "Cannot be Empty";
  const [password, setPassword] = useState({ value: "", hasError: true });
  const passwordErrorMessage = "Needs to be atleast 6 chars long";
  const [validForm, setValidForm] = useState(false);
  const [formError, setFormError] = useState("");

  const dispatch = useDispatch();

  const { isLoading, error, fetchDataHandler } = useHttpGet({
    url: "https://usebookingmanagement-default-rtdb.firebaseio.com/users.json",
  });

  useEffect(() => {
    if ((username.hasError, fullname.hasError, password.hasError)) {
      setValidForm(false);
    } else {
      setValidForm(true);
    }
  }, [username, fullname, password]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(validForm);
    if (!validForm) {
      return;
    }
    let data = await fetchDataHandler();
    data = transformData(data);
    if (data.length > 0) {
      setFormError("Username already taken.");
      event.target.reset();
      username.hasError = true;
      fullname.hasError = true;
      password.hasError = true;
      setValidForm(false);
    } else {
      const response = await fetch(
        `https://usebookingmanagement-default-rtdb.firebaseio.com/users/${username.value}.json`,
        {
          method: "PUT",
          body: JSON.stringify({
            fullname: fullname.value,
            password: password.value,
          }),
          headers: {
            "Content-Type": "applicatoin/json",
          },
        }
      );
      let data = await response.json();
      console.log(data);
      dispatch(loginUserAsync({ username: username.value, password: password.value }));
      props.onClose();
    }
  };

  const transformData = (data) => {
    const loadedData = [];
    for (const key in data) {
      if (key == username.value) {
        loadedData.push({
          id: key,
        });
      }
    }
    return loadedData;
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
              type="text"
              label="Full Name"
              liftupInput={(fullname) => {
                setFullname(fullname);
              }}
              minimumChar={3}
              errorMessage={fullnameErrorMessage}
              inputStyle={fullname.hasError ? { borderColor: "red" } : { borderColor: "green" }}
              labelStyle={fullname.hasError ? { color: "red" } : { color: "green" }}
            >
              Full name:
            </Input>
            {!fullname.hasError && (
              <span className={classes["check-circle"]}>
                <i className="bi bi-check-circle"></i>
              </span>
            )}
          </div>
          <div className="mb-4">
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
          <div className="text-center">
            <button type="submit" className={`btn btn-primary ${classes.button}`}>
              Register
            </button>
          </div>
          <div className="text-center mt-2">
            {formError.length > 0 && (
              <span className="text-danger">
                <i className="bi bi-exclamation-circle"></i>&nbsp;
                {formError}
              </span>
            )}
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default RegisterForm;
