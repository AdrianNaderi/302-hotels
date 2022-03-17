const DropDown = (props) => {
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

  const handleCountry = (event) => {
    props.handleCountry(event.target.value);
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
