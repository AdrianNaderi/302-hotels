import HotelSearch from "./components/hotels/HotelSearch";
import HotelList from "./components/hotels/HotelList";
import HotelDetails from "./components/hotels/HotelDetails";
import { useState, useEffect } from "react";
import Navbar from "./components/layout/Navbar";

function App() {
  const [searchMode, setSearchMode] = useState(true);
  const [detailsMode, setDetailsMode] = useState(false);

  const [hotels, setHotels] = useState([]);
  const onSearch = (searchResult) => {
    setHotels(searchResult);
  };

  const [details, setDetails] = useState(null);
  const onDetails = (details) => {
    console.log(details);
    setDetails(details);
    setDetailsMode(true);
  };

  useEffect(() => {
    if (details == null) {
      setSearchMode(true);
    } else {
      setSearchMode(false);
    }
    console.log(searchMode);
  }, [details]);

  const cancelDetailsMode = () => {
    setDetailsMode(false);
    setDetails(null);
  };
  return (
    <div>
      <Navbar />
      {searchMode && <HotelSearch onSearch={onSearch} />}
      {searchMode && <HotelList hotels={hotels} onDetails={onDetails} />}
      {detailsMode && (
        <HotelDetails details={details} cancelDetails={cancelDetailsMode} />
      )}
    </div>
  );
}

export default App;
