import HotelProfileImg from "../../UI/HotelProfileImg";
import DisplayHotelDescription from "../Details/DisplayHotelDescription";
import { uiActions } from "../../../store/ui-slice";
import { hotelsActions } from "../../../store/hotels-slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const HotelListItem = (props) => {
  const hotel = props.hotel;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDetails = () => {
    dispatch(hotelsActions.selectHotel({ selection: hotel }));
    navigate(`/details/${hotel.id}`);
  };

  return (
    <div className="mb-5">
      <HotelProfileImg url={hotel.url} />
      <div className="row">
        <div className="col-5">
          <DisplayHotelDescription hotel={hotel} />
        </div>
        <div className="col-4 align-self-center mb-4 text-end">
          <button className="btn-lg btn-primary" onClick={handleDetails}>
            Show Details
          </button>
        </div>
      </div>
      <hr></hr>
    </div>
  );
};

export default HotelListItem;
