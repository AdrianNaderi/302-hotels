import React, { useEffect, useState, useCallback } from "react";
import CurrencyHotell from "./CurrencyHotell";
import useHttpGet from "../../hooks/useHttpGet";
const Currency = (props) => {
  const [currency, setCurrency] = useState([]);

  const { isLoading, error, fetchDataHandler } = useHttpGet({
    url: `https://v6.exchangerate-api.com/v6/284d94a411d3ab129c840a38/latest/${props.localCurr}`,
  });

  const currencyHandler = useCallback(async () => {
    let dataLocal = await fetchDataHandler();
    setCurrency(dataLocal);
  }, [fetchDataHandler]);

  useEffect(() => {
    currencyHandler();
  }, [currencyHandler]);

  return (
    <React.Fragment>
      {!isLoading && currency.length !== 0 && (
        <CurrencyHotell
          currency={currency}
          hotellCurr={props.hotellCurr}
          localCurr={props.localCurr}
        ></CurrencyHotell>
      )}
      {!isLoading && currency.length === 0 && !error && <p>No data</p>}
      {!isLoading && error && <p>{error}</p>}
      {isLoading && <p>Loading...</p>}
    </React.Fragment>
  );
};
export default Currency;
