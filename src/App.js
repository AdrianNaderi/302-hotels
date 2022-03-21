import Navbar from "./components/Layout/Navbar";
import SearchWeather from "./components/Weather/SearchWeather";
import { Route, Routes } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import DetailsPage from "./pages/DetailsPage";
import SearchResultsPage from "./pages/SearchResultsPage";
import NotFound from "./pages/404";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="404" element={<NotFound />} />
        <Route path="/searchresults" element={<SearchResultsPage />} />
        <Route path="/details/:hotel" element={<DetailsPage />} />
        <Route path="/bookingconfirmation" element={<ConfirmationPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
