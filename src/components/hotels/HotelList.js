import HotelListItem from "./HotelListItem";

const HotelList = (props) => {
  const hotelList = props.hotels.map((hotel) => (
    <HotelListItem key={hotel.id} hotel={hotel} />
  ));
  return (
    <div>
      <h1>I Have Search results</h1>
      {hotelList}
    </div>
  );
};

export default HotelList;
