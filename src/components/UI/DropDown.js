import { useEffect } from "react";

const DropDown = (props) => {
  const countries = ["Select", "UK", "Germany"];
  const countrySelection = countries.map((country) => (
    <option key={country} value={country}>
      {country}
    </option>
  ));

  const handleCountry = (event) => {
    props.handleCountry(event.target.value);
  };
  useEffect(() => {
    props.handleCountry("Select");
  }, []);
  return (
    <>
      <select onChange={handleCountry}>{countrySelection}</select>
    </>
  );
};

export default DropDown;
