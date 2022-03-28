import Input from "../UI/Input";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import classes from "./User.module.css";

const User = (props) => {
  const user = useSelector((state) => state.auth.username);
  const fullName = useSelector((state) => state.auth.name);

  const navigate = useNavigate();

  return (
    <div className="container-fluid m-5">
      <div className="d-flex flex-column justify-content-center">
        <div className={`container ${classes.box}`}>
          <div className="p-2 col-md-6">
            <Input value={user} disabled={true} label="User Name" />
            <Input value={fullName} disabled={true} label="Full Name" />
          </div>
          <div className="p-2 col-md-6">
            <Input value="Street Adress XX" disabled={true} label="Address" />
            <Input value="customer@domain.com" disabled={true} label="Email" />
          </div>
          <div className="p-2 col-md-6">
            <Input value="xxx-xxxxxxx" disabled={true} label="Phone Number" />
            <Input value="**********" disabled={true} label="Password" />
          </div>
        </div>
      </div>
      <button
        className={classes.button}
        onClick={() => {
          navigate("/bookings");
        }}
      >
        My Bookings
      </button>
      <button className={classes.button}>Change Info</button>
    </div>
  );
};

export default User;
