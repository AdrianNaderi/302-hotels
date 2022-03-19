import { useState } from "react";
import useHttpGet from "../../../hooks/useHttpGet";
import DateTimePicker from "../../UI/DateTimePicker";
import DropDown from "../../UI/DropDown";
import classes from "./HotelSearch.module.css";
import { useDispatch, useSelector } from "react-redux";
import { searchHotels } from "../../../store/hotels-slice";
import { searchActions } from "../../../store/search-slice";

const HotelSearch = (props) => {
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("");
  const hotels = useSelector((state) => state.search.all);
  const fetched = useSelector((state) => state.search.fetched);
  const dispatch = useDispatch();

  const handleSearch = async () => {
    if (!fetched) {
      dispatch(searchHotels());
      return;
    }
    dispatch(searchActions.filterSearch({ data: hotels }));
  };


  return (
    <div className={`container p-5 mb-5 ${classes.background}`}>
      <div className="row align-items-center">
        <div className="col-3">
          <div className="form-floating">
            <input
              id="floating-id"
              className="form-control"
              placeholder="Search"
              onChange={(e) =>
                dispatch(searchActions.storeSearch({ search: e.target.value }))
              }
            ></input>
            <label htmlFor="floating-id">Search</label>
          </div>
        </div>
        <div className="col-2">
          <DropDown />
        </div>
        <DateTimePicker />
        <div className="col-3">
          <button
            className={`btn p-3 w-100 ${classes.button}`}
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelSearch;
