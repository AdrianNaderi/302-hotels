import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DetailsSection from "./DetailsSection";
import HotelSection from "./HotelSection";
import RoomSection from "./RoomSection";

const BookingConfirmation = (props) => {
  const booking = useSelector((state) => state.booking.booking);
  const navigate = useNavigate();
  console.log(booking);

  return (
    <div className="container">
      <h1 className="text-center">Thank you {booking.user} for the Booking!</h1>
      <div className="row">
        <div className="col-8 p-4">
          <HotelSection hotel={booking.hotel} />
          <RoomSection room={booking.room} />
        </div>

        <div className="col-4 p-4 align-self-center">
          <DetailsSection details={booking.details} />
        </div>
      </div>
      <div className="text-center">
        <button
          onClick={() => {
            navigate("/");
          }}
          className="btn-lg btn-primary"
        >
          Continue Searching
        </button>
      </div>
    </div>
  );
};

export default BookingConfirmation;
