import { useDispatch } from "react-redux";
import { searchActions } from "../../store/search-slice";

const DropDown = (props) => {
  const dispatch = useDispatch();

  const countries = [
    "Country",
    "Germany",
    "UK",
    "United States",
    "Australia",
    "Japan",
    "Korea",
    "Belgium",
    "Sweden",
  ];
  const countrySelection = countries.map((country) => (
    <option className="ms-2" key={country} value={country}>
      {country}
    </option>
  ));

  const handleCountry = (e) => {
    dispatch(searchActions.storeCountry({ country: e.target.value }));
  };

  return (
    <>
      <select className="form-select p-3" onChange={handleCountry}>
        {countrySelection}
      </select>
    </>
  );
};

export default DropDown;
