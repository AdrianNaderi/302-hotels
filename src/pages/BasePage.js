import { Outlet } from "react-router-dom";

const BasePage = () => {
  return (
    <>
      <h1>LoggedOut Page </h1>
      <Outlet />
    </>
  );
};

export default BasePage;
