import Input from "../../../UI/Input";
import TextArea from "../../../UI/TextArea";

const DescriptionInput = (props) => {
  return (
    <>
      <TextArea value={props.value} setRows="10" type="text" label="Description" liftupInput={props.liftupInput} minimumChar={1} errorMessage={props.errorMessage} />
    </>
  );
};

export default DescriptionInput;
