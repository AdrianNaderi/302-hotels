import Input from "../../../UI/Input";

const UrlInput = (props) => {
  return (
    <>
      <div className="m-4">
        <Input value={props.value} type="text" label="Image URL" liftupInput={props.liftupInput} minimumChar={1} />
      </div>
    </>
  );
};

export default UrlInput;
