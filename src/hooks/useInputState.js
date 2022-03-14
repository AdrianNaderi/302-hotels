import { useState } from "react";

const useInputState = (errormessage, minInput = 1) => {
  const [input, setInput] = useState("");
  const [inputError, setInputError] = useState(true);
  const errorMessage = errormessage;
  const minimumChars = minInput;

  const handleInput = (data) => {
    setInput(data);
    console.log(`Input: ${input} ${errorMessage}`);
    if (data.trim().length < minimumChars) {
      setInputError(true);
    } else {
      setInputError(false);
    }
  };
  return {
    input,
    inputError,
    setInputError,
    handleInput,
    errorMessage,
  };
};

export default useInputState;
