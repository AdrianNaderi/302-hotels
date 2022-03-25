import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import RoomList from "../../Rooms/RoomList";
import HotelProfileImg from "../../UI/HotelProfileImg";
import classes from "./HotelDetails.module.css";
import CheckOut from "./CheckOut";
import Currency from "../../Currency/CurrencyStart";
import Review from "../../Reviews/ReviewStart";
import { TimespanContextProvider } from "../../../store/timespan-context";
import { searchActions, searchHotelAsync } from "../../../store/search-slice";
import SearchWeather from "../../Weather/SearchWeather";
import Rating from "../../UI/Rating";
import LoadingSpinner from "../../UI/LoadingSpinner";
import RatingTag from "../../UI/RatingTag";

const HotelDetails = (props) => {
  const loading = useSelector((state) => state.http.loading);
  const locationId = useLocation().pathname.replace("/details/", "");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [activeRoom, setActiveRoom] = useState();
  const hotel = useSelector((state) => state.search.single);

  useEffect(() => {
    if (hotel === null) {
      dispatch(searchActions.storeId({ id: locationId }));
      dispatch(searchHotelAsync());
    }
    if (hotel === undefined) {
      navigate("/404", { replace: true });
    }
  }, [hotel]);

  const handleRoomSelection = (room) => {
    setActiveRoom(room);
  };

  return (
    <>
      {loading && (
        <div className={`${classes.spinnerpos} text-center`}>
          <LoadingSpinner size="large" color="#973b50" />
        </div>
      )}

      {!loading && hotel !== null && hotel !== undefined && (
        <>
          <div className="row">
            <div className="col-5">
              <div className={classes["hotelname-bg"]}></div>
              <h1 className={`mt-5 lead fw-bolder ${classes.hotelname}`}>{hotel.name}</h1>
            </div>
            <div className={`mt-5 ms-4 col-5 ${classes.roomtext}`}>
              <h3 className={` lead fw-bolder ${classes.roomname}`}>Our available rooms</h3>
            </div>
          </div>
          <div className={`${classes.details}`}>
            <div className={classes["shared-section"]}>
              <div className={classes["hotel-section"]}>
                <div className={classes["relative-container"]}>
                  <div className={classes.profilepos}>
                    <HotelProfileImg url={hotel.url} />
                  </div>
                  <div className={classes.ratingpos}>
                    <Rating rating={hotel.rating} />
                  </div>
                  <div className={classes.ratingtagpos}>
                    <RatingTag rating={hotel.rating} />
                  </div>
                  <div className={classes.weatherpos}>
                    <SearchWeather country={hotel.location} city={hotel.city}></SearchWeather>
                  </div>
                  <div className={classes.currencypos}>
                    <Currency hotellCurr={hotel.nationalcurrency} country={hotel.location}></Currency>
                  </div>
                </div>
              </div>
              <div className={classes["room-section"]}>
                <RoomList selectRoom={handleRoomSelection} />
              </div>
            </div>

            <TimespanContextProvider>
              <CheckOut room={activeRoom} hotel={hotel} />
            </TimespanContextProvider>
            <Review hotel={hotel}></Review>
          </div>
        </>
      )}
    </>
  );
};

export default HotelDetails;
