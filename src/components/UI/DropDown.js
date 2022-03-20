const DropDown = (props) => {
  const dataSelection = props.data.map((data) => (
    <option className="ms-2" key={data} value={data}>
      {data}
    </option>
  ));

  return (
    <>
      <select
        className="form-select p-3"
        onChange={(e) => props.handleCountry(e.target.value)}
        value={props.current}
      >
        {dataSelection}
      </select>
    </>
  );
};

export default DropDown;
