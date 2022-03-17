import Currency from "./CurrencyOld";
import React, { useEffect, useState, useCallback } from "react";
const CurrencyStart = () => {
  const [location, setLocation] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const fetchLocation = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const responseLocation = await fetch(
        "https://ipgeolocation.abstractapi.com/v1/?api_key=86f573b77a984484b10c6fa8c82378ae"
      );
      if (!responseLocation.ok) {
        throw new Error("Something went wrong");
      }
      const locationData = await responseLocation.json();
      setLocation(locationData);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchLocation();
  }, [fetchLocation]);

  return (
    <React.Fragment>
      {!isLoading && location.length !== 0 && (
        <Currency
          hotellCurr="DKK"
          localCurr={location.currency.currency_code}
        ></Currency>
      )}
      {!isLoading && location.length === 0 && !error && <p>No data</p>}
      {!isLoading && error && <p>{error}</p>}
      {isLoading && <p>Loading...</p>}
    </React.Fragment>
  );
};
export default CurrencyStart;
