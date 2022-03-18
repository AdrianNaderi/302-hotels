import HotelSearch from "./components/Hotels/Search/HotelSearch";
import HotelList from "./components/Hotels/Search/HotelList";
import HotelDetails from "./components/Hotels/HotelDetails";
import { useState, useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import BookingConfirmation from "./components/Bookings/BookingConfirmation";

function App() {
  const [searchMode, setSearchMode] = useState(true);
  const [detailsMode, setDetailsMode] = useState(false);
  const [confirmationMode, setConfirmationMode] = useState(false);
  const [hotels, setHotels] = useState([]);
  const [booking, setBooking] = useState(null);
  const onSearch = (searchResult) => {
    setHotels(searchResult);
  };

  const [details, setDetails] = useState(null);
  const onDetails = (details) => {
    setDetails(details);
    setDetailsMode(true);
  };

  useEffect(() => {
    if (details == null) {
      setSearchMode(true);
    } else {
      setSearchMode(false);
    }
  }, [details]);

  const cancelDetailsMode = () => {
    setDetailsMode(false);
    setDetails(null);
  };

  const backToSearch = () => {
    cancelDetailsMode();
    setConfirmationMode(false);
    setSearchMode(true);
  };

  const handleBooking = (booking) => {
    setBooking(booking);
    setConfirmationMode(true);
    setSearchMode(false);
    setDetailsMode(false);
    console.log(booking);
  };

  return (
    <div>
      <Navbar />
      {searchMode && <HotelSearch onSearch={onSearch} />}
      {searchMode && <HotelList hotels={hotels} onDetails={onDetails} />}
      {detailsMode && (
        <HotelDetails
          details={details}
          cancelDetails={cancelDetailsMode}
          onBooking={handleBooking}
        />
      )}
      {confirmationMode && (
        <BookingConfirmation booking={booking} onBack={backToSearch} />
      )}
    </div>
  );
}

export default App;
