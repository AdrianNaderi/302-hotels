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
      navigate("/404", { replace: true });
    }
  }, [hotel]);

  const handleRoomSelection = (room) => {
    setActiveRoom(room);
  };

  return (
    <div className={classes.details}>
      {hotel !== null && hotel !== undefined && (
        <div className={classes.details}>
          <HotelProfileImg url={hotel.url} />
          <DisplayHotelDescription hotel={hotel} />
          <SearchWeather location={hotel.location}></SearchWeather>
          <Currency hotellCurr={hotel.nationalcurrency}></Currency>
          <RoomList selectRoom={handleRoomSelection} />
          <TimespanContextProvider>
            <CheckOut room={activeRoom} hotel={hotel} />
          </TimespanContextProvider>
        </div>
      )}
    </div>
  );
};

export default HotelDetails;
