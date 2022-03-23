import DropDown from "../../../UI/DropDown";

const CountryInput = (props) => {
  return (
    <div className="me-4 col-4">
      <DropDown style="form-select" current={props.current} data={props.data} handleCountry={props.handleCountry}></DropDown>
      <div className="pt-2">{props.current === "Country" ? `${props.error}` : `Currency: (${props.currency})`}</div>
    </div>
  );
};

export default CountryInput;
