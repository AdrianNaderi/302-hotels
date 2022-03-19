import { searchActions } from "../../../store/search-slice";
import HotelListItem from "./HotelListItem";
import { useSelector } from "react-redux";

const HotelList = (props) => {
  const hotels = useSelector((state) => state.search.filtered);
  const hotelList = hotels.map((hotel) => (
    <HotelListItem key={hotel.id} hotel={hotel} />
  ));
  return <div>{hotelList}</div>;
};

export default HotelList;
