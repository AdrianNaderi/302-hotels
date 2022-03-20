import { useSelector } from "react-redux";
import Navbar from "./components/layout/Navbar";
import { Route, Routes, Navigate } from "react-router-dom";
import SearchWeather from "./components/Weather/SearchWeather";
import SearchPage from "./pages/SearchPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import DetailsPage from "./pages/DetailsPage";
import SearchResultsPage from "./pages/SearchResultsPage";
import NotFound from "./pages/404";
import CustomerPage from "./pages/CustomerPage";
import BasePage from "./pages/BasePage";
import AdminPage from "./pages/AdminPage";

function App() {
  const loggedin = useSelector((state) => state.auth.loggedIn);
  const policy = useSelector((state) => state.auth.policy);

  return (
    <>
      <Navbar />
      <Routes>
        {!loggedin && (
          <Route path="/*" element={<BasePage />}>
            <Route path="" element={<SearchPage />} />
            <Route path="searchresults" element={<SearchResultsPage />} />
            <Route path="details/:hotel" element={<DetailsPage />} />
            <Route path="bookingconfirmation" element={<ConfirmationPage />} />
          </Route>
        )}

        {loggedin && policy !== "admin" && (
          <Route path="/*" element={<CustomerPage />}>
            <Route path="" element={<SearchPage />} />
            <Route path="searchresults" element={<SearchResultsPage />} />
            <Route path="details/:hotel" element={<DetailsPage />} />
            <Route path="bookingconfirmation" element={<ConfirmationPage />} />
          </Route>
        )}

        {loggedin && policy === "admin" && (
          <Route path="/" element={<Navigate replace to="admin/" />} />
        )}
        {loggedin && policy === "admin" && (
          <Route path="/admin/*" element={<AdminPage />}></Route>
        )}
      </Routes>
    </>
  );
}

export default App;
