import { useState, useCallback } from "react";

const useHttpGet = (props) => {
  const url = props.url;
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchDataHandler = async () => {
    setIsLoading(true);
    setError(null);
    let data = "";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Something went wrong.");
      }
      data = await response.json();
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
    return data;
  };

  return {
    fetchDataHandler,
    error,
    isLoading,
  };
};

export default useHttpGet;
