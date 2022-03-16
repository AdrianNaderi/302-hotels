import HotelListItem from "./HotelListItem";

const HotelList = (props) => {
  const hotelList = props.hotels.map((hotel) => (
    <HotelListItem key={hotel.id} hotel={hotel} onDetails={props.onDetails} />
  ));
  return <div>{hotelList}</div>;
};

export default HotelList;
