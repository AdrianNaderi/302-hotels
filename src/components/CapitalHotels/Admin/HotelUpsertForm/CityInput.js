import Input from "../../../UI/Input";

const CityInput = (props) => {
  return (
    <>
      <div className="ms-4 col">
        <Input value={props.value} type="text" label="City" liftupInput={props.liftupInput} minimumChar={5} errorMessage={props.errorMessage} />
      </div>
    </>
  );
};

export default CityInput;
