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
import HotelManagement from "./components/Hotels/Admin/HotelManagement";
import UpsertHotel from "./pages/UpsertHotel";
import UserPage from "./pages/UserPage";
import BookingList from "./components/Bookings/List/BookingList";

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
            <Route path="mypage" element={<UserPage />} />
            <Route path="bookings" element={<BookingList />} />
          </Route>
        )}

        {loggedin && policy === "admin" && <Route path="/" element={<Navigate replace to="admin/" />} />}

        {loggedin && policy === "admin" && (
          <Route path="/admin/*" element={<AdminPage />}>
            <Route path="hotels/*" element={<HotelManagement />} />
            <Route path="upserthotel" element={<UpsertHotel />} />
          </Route>
        )}
        <Route path="/404" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
