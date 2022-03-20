import { useNavigate } from "react-router-dom";

const BookingConfirmation = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-center">This is a booking confirmation.</h1>
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
