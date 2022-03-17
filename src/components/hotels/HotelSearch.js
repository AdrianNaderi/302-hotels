import { useState } from "react";
import useHttpGet from "../../hooks/useHttpGet";
import DateTimePicker from "../UI/DateTimePicker";
import DropDown from "../UI/DropDown";
import classes from "./HotelSearch.module.css";

const HotelSearch = (props) => {
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("");

  const { fetchDataHandler } = useHttpGet({
    url: "https://usebookingmanagement-default-rtdb.firebaseio.com/hotels.json",
  });

  const handleSearch = async () => {
    const allHotels = await fetchDataHandler();
    const transformedData = transformData(allHotels);
    console.log(transformedData);
    props.onSearch(transformedData);
  };

  const filterSearch = (name) => {
    return name.toLowerCase().includes(search.toLowerCase());
  };

  const filterCountry = (countrySelection) => {
    return countrySelection.toLowerCase().includes(country.toLowerCase());
  };
  const transformData = (data) => {
    const loadedData = [];
    for (const key in data) {
      loadedData.push({
        id: key,
        name: data[key].name,
        description: data[key].description,
        location: data[key].location,
        rating: data[key].rating,
        nationalcurrency: data[key].nationalcurrency,
        url: data[key].url,
      });
    }
    if (search.trim().length === 0 && country === "Country") {
      return loadedData;
    } else if (search.trim().length === 0 && country !== "Country") {
      return loadedData.filter((data) => filterCountry(data.location));
    } else if (search.trim().length !== 0 && country === "Country") {
      return loadedData.filter((data) => filterSearch(data.name));
    } else {
      return loadedData.filter(
        (data) => filterCountry(data.location) && filterSearch(data.name)
      );
    }
  };

  const handleCountry = (country) => {
    setCountry(country);
  };

  return (
    <div className={`container p-5 ${classes.background}`}>
      <div className="row align-items-center">
        <div className="col-3">
          <div className="form-floating">
            <input
              id="floating-id"
              className="form-control"
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
            ></input>
            <label htmlFor="floating-id">Search</label>
          </div>
        </div>
        <div className="col-2">
          <DropDown handleCountry={handleCountry} />
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
