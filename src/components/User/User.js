import Input from "../UI/Input";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import classes from "./User.module.css";
import { useState } from "react";

const User = (props) => {
  const user = useSelector((state) => state.auth.username);
  const fullName = useSelector((state) => state.auth.name);
  const [isActive, setIsActive] = useState(false);

  const navigate = useNavigate();

  const handleToggole = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="container mt-4 text-center">
      <div className={classes.box}>
        <div className="p-2">
          <Input value={user} disabled={true} label="User Name" />
          <Input value={fullName} disabled={!isActive ? true : false} label="Full Name" />
        </div>
        <div className="p-2">
          <Input value="Street Adress XX" disabled={!isActive ? true : false} label="Address" />
          <Input value="customer@domain.com" disabled={!isActive ? true : false} label="Email" />
        </div>
        <div className="p-2">
          <Input value="xxx-xxxxxxx" disabled={!isActive ? true : false} label="Phone Number" />
          <Input value="**********" disabled={!isActive ? true : false} label="Password" />
        </div>
        <div className="text-start">
          <button
            className={classes.button}
            onClick={() => {
              navigate("/bookings");
            }}
          >
            My Bookings
          </button>
          {!isActive && (
            <button className={classes.button} onClick={handleToggole}>
              Update Data
            </button>
          )}
          {isActive && (
            <button className={classes.button} onClick={handleToggole}>
              Save Data
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default User;
