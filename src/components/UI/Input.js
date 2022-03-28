import useInputState from "../../hooks/useInputState";

const Input = (props) => {
  const { input, inputError, handleInput, errorMessage } = useInputState(
    props.errorMessage,
    props.minimumChar
  );

  const handleChange = (e) => {
    const inputValue = e.target.value;
    handleInput(inputValue);
    props.liftupInput({
      value: inputValue,
      hasError: inputValue.length < props.minimumChar ? true : false,
    });
  };

  return (
    <>
      <div className="form-floating">
        <input
          id={props.label}
          className="form-control"
          type={props.type}
          onChange={handleChange}
          value={props.value}
          style={props.inputStyle}
          disabled={props.disabled}
        />
        <label htmlFor={props.label} className="" style={props.labelStyle}>
          {props.label}
        </label>
      </div>
      <div>{input.length > 0 && inputError && <span>{errorMessage}</span>}</div>
    </>
  );
};

export default Input;
