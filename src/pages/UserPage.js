import Input from "../components/UI/Input";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const UserPage = (props) => {
  const userName = useSelector((state) => state.auth.username);
  const fullName = useSelector((state) => state.auth.name);
  const navigate = useNavigate();

  return (
    <div className="container-fluid">
      <h1>My Page</h1>
      <div className="container">
        <Input />
        <Input />
        <Input />
        <button
          onClick={() => {
            navigate("/bookings");
          }}
        >
          My Bookings
        </button>
      </div>
    </div>
  );
};

export default UserPage;
