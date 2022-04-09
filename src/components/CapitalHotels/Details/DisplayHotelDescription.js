import Rating from "../../UI/Rating";

const DisplayHotelDescription = (props) => {
  return (
    <>
      <div className="ms-3">
        <h1>{props.hotel.name}</h1>
        <p>{props.hotel.description}</p>
        <br />
        <p>Location: {props.hotel.location}</p>
        <p>Rating: {props.hotel.rating}</p>
        <br />
        <br />
      </div>
    </>
  );
};

export default DisplayHotelDescription;
