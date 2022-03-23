import { useNavigate } from "react-router-dom";

const NavLinks = (props) => {
  const navigate = useNavigate();

  const userHandler = () => {
    navigate();
  };

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
            <i className="bi bi-person-circle"></i>&nbsp; {props.userName}
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
