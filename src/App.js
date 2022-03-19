import Navbar from "./components/layout/Navbar";
import SearchWeather from "./components/Weather/SearchWeather";
import { Route, Routes } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import DetailsPage from "./pages/DetailsPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/details/" element={<DetailsPage />} />
        <Route path="/details/:hotel" element={<DetailsPage />} />
        <Route path="/bookingconfirmation" element={<ConfirmationPage />} />
      </Routes>
    </>
  );
}

export default App;
