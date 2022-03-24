import { useEffect, useState } from "react";
import useHttpGet from "../../../hooks/useHttpGet";
import DateTimePicker from "../../UI/DateTimePicker";
import DropDown from "../../UI/DropDown";
import classes from "./HotelSearch.module.css";
import { useDispatch, useSelector } from "react-redux";
import { searchActions, searchHotels } from "../../../store/search-slice";
import { searchHotelsAsync } from "../../../store/http-slice";
import { countries } from "../../../lib/sd";
import { useNavigate, useSearchParams } from "react-router-dom";

const HotelSearch = (props) => {
  const [searchParams] = useSearchParams();
  const countrySearchParam = searchParams.get("country");
  const searchParam = searchParams.get("search");

  const [search, setSearch] = useState(searchParam === null ? "" : searchParam);
  const [country, setCountry] = useState(
    countrySearchParam === null ? "Country" : countrySearchParam
  );
  const fetched = useSelector((state) => state.search.fetched);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = async () => {
    dispatch(searchActions.storeSearch({ search }));
    dispatch(searchActions.storeCountry({ country }));
    if (!fetched) {
      dispatch(searchHotels());
      handleNavigation();
      return;
    }
    dispatch(searchActions.storeFiltered());
    handleNavigation();
  };

  useEffect(() => {
    if (searchParam !== null) {
      dispatch(searchActions.storeSearch({ search }));
      dispatch(searchActions.storeCountry({ country }));
      if (!fetched) {
        dispatch(searchHotelsAsync());
        return;
      }
      dispatch(searchActions.storeFiltered());
    }
  }, [fetched]);

  const handleNavigation = () => {
    navigate({
      pathname: "/searchresults",
      search: `?country=${country}&search=${search}`,
    });
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
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            ></input>
            <label htmlFor="floating-id">Search</label>
          </div>
        </div>
        <div className="col-2">
          <DropDown
            data={countries}
            style="form-select p-3"
            current={country}
            handleCountry={(country) => setCountry(country)}
          />
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
