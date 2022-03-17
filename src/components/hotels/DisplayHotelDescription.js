const DisplayHotelDescription = (props) => {
  return (
    <>
      <h1>{props.hotel.name}</h1>
      <p>{props.hotel.description}</p>
      <br />
      <p>{props.hotel.location}</p>
      <p>Rating: {props.hotel.rating}</p>
      <br />
      <br />
    </>
  );
};

export default DisplayHotelDescription;
