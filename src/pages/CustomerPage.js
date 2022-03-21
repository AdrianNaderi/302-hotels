import { Outlet, Route, Routes } from "react-router-dom";
import SearchPage from "./SearchPage";
import ConfirmationPage from "./ConfirmationPage";
import DetailsPage from "./DetailsPage";
import SearchResultsPage from "./SearchResultsPage";

const CustomerPage = () => {
  return (
    <>
      <h1>Logged In page</h1>
      <Outlet />
    </>
  );
};

export default CustomerPage;
