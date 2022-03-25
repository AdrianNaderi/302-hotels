import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../../UI/LoadingSpinner";
import BookingImages from "./BookingImages";
import ConfirmationText from "./ConfirmationText";

const BookingConfirmation = (props) => {
  const booking = useSelector((state) => state.booking.booking);
  const loading = useSelector((state) => state.http.loading);
  const navigate = useNavigate();

  return (
    <>
      {loading && (
        <div className="text-center mt-5">
          <LoadingSpinner size="large" color="#000" />
        </div>
      )}
      {booking !== null && (
        <>
          <div className="container mt-5">
            <h1>Thank you {booking.user} for your booking!</h1>
            <BookingImages hotelurl={booking.hotel.url} roomurl={booking.room.url} />
            <ConfirmationText booking={booking} />
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
        </>
      )}
    </>
  );
};

export default BookingConfirmation;
