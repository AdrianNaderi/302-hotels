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

  return (
    <>
      <select
        className="form-select p-3"
        onChange={(e) => props.handleCountry(e.target.value)}
      >
        {countrySelection}
      </select>
    </>
  );
};

export default DropDown;
