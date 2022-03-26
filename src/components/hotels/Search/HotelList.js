import HotelListItem from "./HotelListItem";
import { useSelector } from "react-redux";
import LoadingSpinner from "../../UI/LoadingSpinner";
import classes from "./HotelList.module.css";

const HotelList = (props) => {
  const loading = useSelector((state) => state.http.loading);
  const hotels = useSelector((state) => state.search.filtered);
  const hotelList = hotels.map((hotel) => <HotelListItem key={hotel.id} hotel={hotel} />);
  return (
    <>
      {loading && (
        <div className={`text-center ${classes.spinnerpos}`}>
          <LoadingSpinner size="large" color="#973b50" />
        </div>
      )}
      {hotels.length === 0 && <p className={classes.noresults}>No hotels found :´(</p>}
      <div className={classes.listpos}>{hotelList}</div>
    </>
  );
};

export default HotelList;
