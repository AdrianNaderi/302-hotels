import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import RoomList from "../../Rooms/RoomList";
import HotelProfileImg from "../../UI/HotelProfileImg";
import DisplayHotelDescription from "./DisplayHotelDescription";
import ServiceSection from "../../layout/ServiceSection";
import classes from "./HotelDetails.module.css";
import CheckOut from "./CheckOut";
import Currency from "../../Currency/CurrencyStart";
import { TimespanContextProvider } from "../../../store/timespan-context";
import { searchActions, searchHotel } from "../../../store/search-slice";
import Weather from "../../Weather/SearchWeather";
import SearchWeather from "../../Weather/SearchWeather";

const HotelDetails = (props) => {
  const locationId = useLocation().pathname.replace("/details/", "");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [activeRoom, setActiveRoom] = useState();
  const hotel = useSelector((state) => state.search.single);

  useEffect(() => {
    if (hotel === null) {
      dispatch(searchActions.storeId({ id: locationId }));
      dispatch(searchHotel());
    }
    if (hotel === undefined) {
      navigate("/404");
    }
  }, [hotel]);

  const handleRoomSelection = (room) => {
    setActiveRoom(room);
  };

  console.log(hotel);
  return (
    <div className={classes.details}>
      {hotel !== null && hotel !== undefined && (
        <HotelProfileImg url={hotel.url} />
      )}
      {hotel !== null && hotel !== undefined && (
        <DisplayHotelDescription hotel={hotel} />
      )}
      <div className={classes.components}>
        <ServiceSection>
        {hotel !== null && hotel !== undefined && (
            <SearchWeather location={hotel.location}></SearchWeather>
          )}
        </ServiceSection>
        <ServiceSection>
          {hotel !== null && hotel !== undefined && (
            <Currency hotellCurr={hotel.nationalcurrency}></Currency>
          )}
        </ServiceSection>
      </div>
      <RoomList selectRoom={handleRoomSelection} />
      <TimespanContextProvider>
        {hotel !== null && hotel !== undefined && (
          <CheckOut room={activeRoom} hotel={hotel} />
        )}
      </TimespanContextProvider>
    </div>
  );
};

export default HotelDetails;
