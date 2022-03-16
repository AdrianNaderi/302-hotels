import RoomList from "../rooms/RoomList";

const HotelDetails = (props) => {
  const hotel = props.details;
  const handleCancelDetails = () => {
    props.cancelDetails();
  };

  return (
    <div>
      <h3>*******Details******</h3>
      <p>{hotel.name}</p>
      <p>{hotel.description}</p>
      <p>{hotel.location}</p>
      <p>{hotel.rating}</p>
      <h3>********************</h3>
      <button onClick={handleCancelDetails}>Back</button>
      <RoomList />
    </div>
  );
};

export default HotelDetails;
