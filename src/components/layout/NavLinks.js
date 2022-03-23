import { useNavigate } from "react-router-dom";
import classes from "./Navbar.module.css";

const NavLinks = (props) => {
  const navigate = useNavigate();

  return (
    <>
      {!props.loggedIn && (
        <>
          <li className="nav-item">
            <a
              className={`nav-link text-dark ${classes.link}`}
              onClick={props.showLoginHandler}
            >
              Login
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link text-dark ${classes.link}`}
              onClick={props.showRegisterHandler}
            >
              Register
            </a>
          </li>
        </>
      )}
      {props.loggedIn && props.policy !== "admin" && (
        <>
          <li className="nav-item">
            <a
              className={`nav-link text-dark ${classes.link}`}
              onClick={() => {
                navigate("/mypage");
              }}
            >
              <i className="bi bi-person-circle"></i>&nbsp; {props.userName}
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link text-dark ${classes.link}`}
              onClick={props.logOut}
            >
              Logout
            </a>
          </li>
        </>
      )}
      {props.loggedIn && props.policy === "admin" && (
        <>
          <li className="nav-item">
            <a
              className={`nav-link text-dark ${classes.link}`}
              onClick={() => {
                navigate("/admin/hotels");
              }}
            >
              Hotel Managment
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link text-dark ${classes.link}`}
              onClick={props.logOut}
            >
              Logout
            </a>
          </li>
        </>
      )}
    </>
  );
};

export default NavLinks;
