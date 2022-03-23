import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/auth-slice";

const NavLinks = (props) => {
  return (
    <>
      {!props.loggedIn && (
        <>
          <a
            className="nav-link active"
            href="#"
            onClick={props.showLoginHandler}
          >
            Login
          </a>
          <a
            className="nav-link active"
            href="#"
            onClick={props.showRegisterHandler}
          >
            Register
          </a>
        </>
      )}
      {props.loggedIn && (
        <>
          <a className="nav-link active" href="#">
            <i class="bi bi-person-circle"></i>&nbsp; {props.userName}
          </a>
          <a className="nav-link active" href="#" onClick={props.logOut}>
            Logout
          </a>
        </>
      )}
    </>
  );
};

export default NavLinks;
