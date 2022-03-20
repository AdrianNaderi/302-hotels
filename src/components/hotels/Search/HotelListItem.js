import HotelProfileImg from "../../UI/HotelProfileImg";
import DisplayHotelDescription from "../Details/DisplayHotelDescription";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { searchActions } from "../../../store/search-slice";

const HotelListItem = (props) => {
  const hotel = props.hotel;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDetails = () => {
    dispatch(searchActions.storeId({ id: hotel.id }));
    dispatch(searchActions.storeOne());
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
