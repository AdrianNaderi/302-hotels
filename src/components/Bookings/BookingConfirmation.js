import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
const BookingConfirmation = (props) => {
  const dispatch = useDispatch(uiActions);

  return (
    <div>
      <h1 className="text-center">This is a booking confirmation.</h1>
      <div className="text-center">
        <button
          onClick={() => {
            dispatch(uiActions.searchMode());
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
