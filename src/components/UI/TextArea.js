import useInputState from "../../hooks/useInputState";

const TextArea = (props) => {
  const { input, inputError, handleInput, errorMessage } = useInputState(props.errorMessage, props.minimumChar);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    handleInput(inputValue);
    props.liftupInput({
      value: inputValue,
      hasError: inputValue.length < props.minimumChar ? true : false,
    });
  };

  return (
    <div className="m-4">
      <textarea name={props.label} id={props.label} className="form-control" type={props.type} onChange={handleChange} value={props.value} rows={props.setRows} placeholder="Write about the hotel..."></textarea>
      <div>{input.length > 0 && inputError && <span>{errorMessage}</span>}</div>
    </div>
  );
};

export default TextArea;
