import HotelSearch from "./components/Hotels/Search/HotelSearch";
import HotelList from "./components/Hotels/Search/HotelList";
import HotelDetails from "./components/Hotels/HotelDetails";
import Navbar from "./components/layout/Navbar";
import BookingConfirmation from "./components/Bookings/BookingConfirmation";
import SearchWeather from "./components/Weather/SearchWeather";
import { useSelector } from "react-redux";

function App() {
  const searchmode = useSelector((state) => state.ui.search);
  const detailsmode = useSelector((state) => state.ui.details);
  const confirmationmode = useSelector((state) => state.ui.confirmation);

  return (
    <div>
      <Navbar />
      {searchmode && <HotelSearch />}
      {searchmode && <HotelList />}
      {detailsmode && <HotelDetails />}
      {confirmationmode && <BookingConfirmation />}
    </div>
  );
}

export default App;
