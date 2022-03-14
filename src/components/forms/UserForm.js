import { useEffect, useState } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";

const UserForm = (props) => {
  const [username, setUsername] = useState({ value: "", hasError: true });
  const usernameErrorMessage = "Needs to be atleast 5 chars long";

  const [fullname, setFullname] = useState({ value: "", hasError: true });
  const fullnameErrorMessage = "Cannot be Empty";

  const [password, setPassword] = useState({ value: "", hasError: true });
  const passwordErrorMessage = "Needs to be atleast 6 chars long";

  const [address, setAddress] = useState({ value: "", hasError: true });
  const addressErrorMessage = "Cannot be empty";

  const [city, setCity] = useState({ value: "", hasError: true });
  const cityErrorMessage = "Cannot be empty";

  const [postalcode, setPostalcode] = useState({ value: "", hasError: true });
  const postalcodeErrorMessage = "Cannot be empty";

  const [validForm, setValidForm] = useState(false);

  useEffect(() => {
    if (
      (username.hasError,
      fullname.hasError,
      password.hasError,
      address.hasError,
      city.hasError,
      postalcode.hasError)
    ) {
      setValidForm(false);
    } else {
      setValidForm(true);
    }
  }, [username, fullname, password, address, city, postalcode]);

  return (
    <form>
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
        type="text"
        liftupInput={(fullname) => {
          setFullname(fullname);
        }}
        minimumChar={1}
        errorMessage={fullnameErrorMessage}
      >
        Full name:
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
      <Input
        type="text"
        liftupInput={(address) => {
          setAddress(address);
        }}
        minimumChar={1}
        errorMessage={addressErrorMessage}
      >
        Address:
      </Input>
      <Input
        type="text"
        liftupInput={(city) => {
          setCity(city);
        }}
        minimumChar={1}
        errorMessage={cityErrorMessage}
      >
        City:
      </Input>
      <Input
        type="text"
        liftupInput={(postalcode) => {
          setPostalcode(postalcode);
        }}
        minimumChar={1}
        errorMessage={postalcodeErrorMessage}
      >
        Postal Code:
      </Input>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default UserForm;
