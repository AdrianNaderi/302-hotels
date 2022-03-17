import React, { useState, useEffect, useCallback } from "react";
import useHttpGet from "../../hooks/useHttpGet";
import Currency from "./CurrencyLocal";
const CurrencyStart = (props) => {
  const [location, setLocation] = useState([]);
  const { isLoading, error, fetchDataHandler } = useHttpGet({
    url: "https://ipgeolocation.abstractapi.com/v1/?api_key=86f573b77a984484b10c6fa8c82378ae",
  });

  const currencyHandler = useCallback(async () => {
    let data = await fetchDataHandler();

    setLocation(data);
  }, []);

  useEffect(() => {
    currencyHandler();
  }, [currencyHandler]);

  console.log(location);

  return (
    <React.Fragment>
      {!isLoading && location.length !== 0 && (
        <Currency
          hotellCurr={props.hotellCurr}
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
