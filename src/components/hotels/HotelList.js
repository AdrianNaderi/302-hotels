import HotelListItem from "./HotelListItem";

const HotelList = (props) => {
  const hotelList = props.hotels.map((hotel) => (
    <HotelListItem key={hotel.id} hotel={hotel} onDetails={props.onDetails} />
  ));
  return (
    <div>
      <h1>I Have Search results</h1>
      {hotelList}
    </div>
  );
};

export default HotelList;
