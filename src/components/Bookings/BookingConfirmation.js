const BookingConfirmation = (props) => {
  return (
    <div>
      <h1 className="text-center">This is a booking confirmation.</h1>
      <div className="text-center">
        <button
          onClick={() => {
            props.onBack();
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
