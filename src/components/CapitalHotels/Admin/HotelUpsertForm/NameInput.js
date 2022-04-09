import Input from "../../../UI/Input";

const NameInput = (props) => {
  return (
    <>
    <div className="m-4">
      <Input value={props.value} type="text" label="Hotel Name" liftupInput={props.liftupInput} minimumChar={5} errorMessage={props.errorMessage} />
    </div>
    </>
  );
};

export default NameInput;
