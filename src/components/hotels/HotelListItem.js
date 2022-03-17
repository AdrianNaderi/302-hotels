const HotelListItem = (props) => {
  const hotel = props.hotel;

  const handleDetails = () => {
    props.onDetails(hotel);
  };
  return (
    <div >
      <p>{hotel.name}</p>
      <p>{hotel.description}</p>
      <p>{hotel.location}</p>
      <p>{hotel.rating}</p>
      <button onClick={handleDetails}>Show Details</button>
      <hr></hr>
    </div>
  );
};

export default HotelListItem;
