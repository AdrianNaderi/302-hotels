const HotelSection = (props) => {
  return (
    <>
      <p>Hotel Information</p>
      <p>ID: {props.hotel.id}</p>
      <p>Name: {props.hotel.name}</p>
      <p>Description: {props.hotel.description}</p>
      <p>Country: {props.hotel.location}</p>
      <p>City: {props.hotel.city}</p>
      <p>Currency: {props.hotel.nationalcurrency}</p>
      <p>Rating: {props.hotel.rating}</p>
      <p>{props.hotel.url}</p>
    </>
  );
};

export default HotelSection;
