import { Outlet } from "react-router-dom";

const AdminPage = () => {
  return (
    <>
      <h1>This is the AdminPage </h1>
      <Outlet />
    </>
  );
};

export default AdminPage;
