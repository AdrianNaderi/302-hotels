import { useEffect, useState } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import useHttpGet from "../../hooks/useHttpGet";

const LoginForm = (props) => {
  const [username, setUsername] = useState({ value: "", hasError: true });
  const usernameErrorMessage = "Needs to be atleast 5 chars long";
  const [password, setPassword] = useState({ value: "", hasError: true });
  const passwordErrorMessage = "Needs to be atleast 6 chars long";
  const [validForm, setValidForm] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginErrorMessage, setLoginErrorMessage] = useState("");

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

    console.log(data);
    if (data.length === 0) {
      setLoginErrorMessage("No users with that usename exists!");
    } else if (data[0].password !== password.value) {
      setLoginErrorMessage("Wrong Password!");
      console.log(`${data[0].password} !== ${password.value}`);
    } else {
      setLoginErrorMessage("");
      setLoginSuccess(true);
    }
  };

  const transformData = (data) => {
    const loadedData = [];
    for (const key in data) {
      if (key == username.value) {
        loadedData.push({
          id: key,
          password: data[key].password,
        });
      }
    }
    return loadedData;
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        liftupInput={(username) => {
          setUsername(username);
        }}
        minimumChar={5}
        errorMessage={usernameErrorMessage}
      >
        Username:
      </Input>

      <Input
        type="password"
        liftupInput={(password) => {
          setPassword(password);
        }}
        minimumChar={6}
        errorMessage={passwordErrorMessage}
      >
        Password:
      </Input>

      <Button type="submit">Submit</Button>
      <div>{validForm && <span>{loginErrorMessage}</span>}</div>
    </form>
  );
};

export default LoginForm;
