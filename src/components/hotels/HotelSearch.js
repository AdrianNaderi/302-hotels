import { useState } from "react";
import useHttpGet from "../../hooks/useHttpGet";
import DateTimePicker from "../UI/DateTimePicker";
import DropDown from "../UI/DropDown";

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
      });
    }
    if (search.trim().length === 0 && country === "Select") {
      return loadedData;
    } else if (search.trim().length === 0 && country !== "Select") {
      return loadedData.filter((data) => filterCountry(data.location));
    } else if (search.trim().length !== 0 && country === "Select") {
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
    <div>
      <label>
        Search
        <input onChange={(e) => setSearch(e.target.value)}></input>
      </label>
      <DateTimePicker />
      <DropDown handleCountry={handleCountry} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default HotelSearch;
