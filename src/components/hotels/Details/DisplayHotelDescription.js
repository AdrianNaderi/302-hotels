import Rating from "../../UI/Rating";

const DisplayHotelDescription = (props) => {
  return (
    <>
      <h1>{props.hotel.name}</h1>
      <p>{props.hotel.description}</p>
      <br />
      <p>Location: {props.hotel.location}</p>
      <p>Rating: {props.hotel.rating}</p>
      <Rating rating={props.hotel.rating} />
      <br />
      <br />
    </>
  );
};

export default DisplayHotelDescription;
