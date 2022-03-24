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

      {!loading && 
      <LoadingSpinner size="small" />}

      <div>{hotelList}</div>
    </>
  );
};

export default HotelList;
