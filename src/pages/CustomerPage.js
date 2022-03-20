import { Route, Routes } from "react-router-dom";
import SearchPage from "./SearchPage";
import ConfirmationPage from "./ConfirmationPage";
import DetailsPage from "./DetailsPage";
import SearchResultsPage from "./SearchResultsPage";

const CustomerPage = () => {
  return (
    <>
      <h1>Not Found </h1>
      <Routes>
        <Route path="/searchresults" element={<SearchResultsPage />} />
        <Route path="/details/:hotel" element={<DetailsPage />} />
        <Route path="/bookingconfirmation" element={<ConfirmationPage />} />
      </Routes>
    </>
  );
};

export default CustomerPage;
